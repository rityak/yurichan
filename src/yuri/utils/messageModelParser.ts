import { messageHandlerType } from '../../model/messageHandlers.model.js'
import contain from './contain.js'

export interface returnMessageHandler {
  status: boolean
  value?: messageHandlerType
}

type messageHandler = (message: string) => returnMessageHandler

export default function messageModelParser(
  messageModel: messageHandlerType[],
): messageHandler[] {
  const handlerSeries: messageHandler[] = []

  messageModel.forEach(model => {
    const handler: messageHandler = message => {
      const result: returnMessageHandler = { status: false }

      result.status = contain(message, model.triggers)
      if (result.status) result.value = model

      return result
    }

    handlerSeries.push(handler)
  })

  return handlerSeries
}

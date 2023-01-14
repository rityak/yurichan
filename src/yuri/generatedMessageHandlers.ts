import { Context, MiddlewareFn, Telegraf } from 'telegraf'

import { messageHandlersModel } from '../model/messageHandlers.model.js'
import messageModelParser from './utils/messageModelParser.js'
import { chance, choice } from './utils/random.js'

export function generatedMessageHandlers(bot: Telegraf) {
  const handlers = messageModelParser(messageHandlersModel)
  const messageHandlersMiddleware: MiddlewareFn<any> = async (
    context: Context,
    next,
  ) => {
    if (context.message && 'text' in context.message) {
      const text = context.message.text
      let result

      for (const handler of handlers) {
        if (result?.status) continue
        result = handler(text)
      }

      if (result?.status && result?.value) {
        if (
          result?.value.options?.chance &&
          !chance(result?.value.options?.chance)
        ) {
          return
        }

        context?.reply(choice(result.value.reactions))
      }
    }

    return await next()
  }
  bot.on('message', messageHandlersMiddleware)
}

const messageHandlersMiddleware: MiddlewareFn<any> = async (
  context: Context,
  next,
) => {
  // console.log(context.message);
  return await next()
}

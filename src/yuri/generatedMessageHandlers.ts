import { Context, MiddlewareFn, Telegraf } from 'telegraf'
import chalkTemplate from 'chalk-template'

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
      const title =
        context?.message?.chat?.type === 'supergroup' ||
        context?.message?.chat?.type === 'group'
          ? context?.message?.chat?.title
          : 'private'
      let result

      if (process.env?.LOG_MESSAGE === 'true') {
        console.log(
          chalkTemplate`{blue @${
            context?.message?.from?.username
          }->${title} |} {green :message} -> ${text.replace(/\v|\n/gi, ' ')} `,
        )
      }

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

        const message = choice(result.value.reactions)

        try {
          context?.reply(message)

          if (process.env?.LOG_MESSAGE === 'true') {
            console.log(chalkTemplate`{blue [Yuri]->${title} |} ${message}`)
          }
        } catch (e) {
          console.error(
            chalkTemplate`{red [Yuri] |} send message {red error}`,
            message,
          )
        }
      }
    }

    return await next()
  }
  bot.on('message', messageHandlersMiddleware)
}

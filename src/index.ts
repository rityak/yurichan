import { Telegraf } from 'telegraf'

import { execute } from './execute.js'
import { generatedMessageHandlers } from './yuri/generatedMessageHandlers.js'
import chatSuccess from './yuri/chatSuccess.js'
import userJoins from './scripts/join.js'
import updateBot from './scripts/update.js'

await execute(() => {
  const USE_IN_CHATS = ['-1001839637577']
  const PRODUCTION = process.env?.PRODUCTION === 'true'
  const TOKEN = process.env?.TOKEN || ''
  const bot: Telegraf = new Telegraf(TOKEN)

  if (PRODUCTION) {
    USE_IN_CHATS.push('-1001635567203') /* Подземелие */
    // USE_IN_CHATS.push('-1001764819230') /* Подвал */
  }

  updateBot(bot)

  chatSuccess(bot, USE_IN_CHATS)
  userJoins(bot, USE_IN_CHATS)
  generatedMessageHandlers(bot)

  bot.launch().catch(console.error)

  return bot
})

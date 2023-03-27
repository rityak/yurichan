import { Telegraf } from 'telegraf'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
export default function userJoins(bot: Telegraf, CHATS: string[]): void {
  bot.on('new_chat_members', context => {
    // const chat = context?.update?.message?.chat?.id.toString()
    const username = context?.update?.message?.from?.username
    const message = `Привет мой хороший @${username}, добро пожаловать в подвальчик.\n
Пожалуйсто прочитай наши новые и хорошие правила: https://teletype.in/@nuxs/pravila2 \n
И можешь общятся не стеснятся мур :3
`
    // console.log(chat)

    // for (const chat_id_success in CHATS) {
    //   if (chat === chat_id_success) {
    //     console.log('success')
    //   }
    // }

    context.reply(message)
  })
}

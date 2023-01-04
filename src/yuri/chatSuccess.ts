import { Context, MiddlewareFn, Telegraf } from 'telegraf';

export default function chatSuccess(bot: Telegraf, successChatIds: string[]) {
  const chatSuccessMiddleware: MiddlewareFn<any> = async (
    context: Context,
    next,
  ) => {
    const chatId: string = context.message?.chat.id.toString() ?? '';
    const success = successChatIds.some(id => id === chatId);

    if (success) return await next();
  };

  bot.use(chatSuccessMiddleware);
}

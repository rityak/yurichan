export default function chatSuccess(bot, successChatIds) {
    const chatSuccessMiddleware = async (context, next) => {
        const chatId = context.message?.chat.id.toString() ?? '';
        const success = successChatIds.some(id => id === chatId);
        if (success)
            return await next();
    };
    bot.use(chatSuccessMiddleware);
}

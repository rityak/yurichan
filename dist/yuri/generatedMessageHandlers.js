import chalkTemplate from 'chalk-template';
import { messageHandlersModel } from '../model/messageHandlers.model.js';
import messageModelParser from './utils/messageModelParser.js';
import { chance, choice } from './utils/random.js';
export function generatedMessageHandlers(bot) {
    const handlers = messageModelParser(messageHandlersModel);
    const messageHandlersMiddleware = async (context, next) => {
        if (context.message && 'text' in context.message) {
            const text = context.message.text;
            const title = context?.message?.chat?.type === 'supergroup' ||
                context?.message?.chat?.type === 'group'
                ? context?.message?.chat?.title
                : 'private';
            const reply = !!context?.message?.reply_to_message;
            let result;
            if (process.env?.LOG_MESSAGE === 'true') {
                console.log(chalkTemplate `{blue @${context?.message?.from?.username}->${title} |} {green :message} {yellow ${reply ? 'R' : ''}} -> ${text.replace(/\v|\n/gi, ' ')} `);
            }
            for (const handler of handlers) {
                if (result?.status)
                    continue;
                result = handler(text);
            }
            if (result?.status && result?.value) {
                /* Opts Parse */
                if (result?.value.options?.chance &&
                    !chance(result?.value.options?.chance)) {
                    return;
                }
                if (result?.value?.options?.reply && !reply) {
                    return;
                }
                /* Send Message */
                const message = choice(result.value.reactions);
                try {
                    context?.reply(message);
                    if (process.env?.LOG_MESSAGE === 'true') {
                        console.log(chalkTemplate `{blue [Yuri]->${title} |} ${message}`);
                    }
                }
                catch (e) {
                    console.error(chalkTemplate `{red [Yuri] |} send message {red error}`, message);
                }
            }
        }
        return await next();
    };
    bot.on('message', messageHandlersMiddleware);
}
//# sourceMappingURL=generatedMessageHandlers.js.map
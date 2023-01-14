import { messageHandlersModel } from '../model/messageHandlers.model.js';
import messageModelParser from './utils/mesageModelParser.js.js';
import { choice } from './utils/random.js';
export function generatedMessageHandlers(bot) {
    const handlers = messageModelParser(messageHandlersModel);
    const messageHandlersMiddleware = async (context, next) => {
        if (context.message && 'text' in context.message) {
            const text = context.message.text;
            let result;
            for (const handler of handlers) {
                if (result?.status)
                    continue;
                result = handler(text);
            }
            if (result?.status && result?.value) {
                context?.reply(choice(result.value.reactions));
            }
        }
        return await next();
    };
    bot.on('message', messageHandlersMiddleware);
}
const messageHandlersMiddleware = async (context, next) => {
    // console.log(context.message);
    return await next();
};
//# sourceMappingURL=generatedMessageHandlers.js.map
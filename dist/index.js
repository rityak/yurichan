import { Telegraf } from 'telegraf';
import { execute } from './execute.js';
import { generatedMessageHandlers } from './yuri/generatedMessageHandlers.js';
import chatSuccess from './yuri/chatSuccess.js';
await execute(() => {
    const USE_IN_CHATS = ['-1001839637577'];
    const PRODUCTION = process.env?.PRODUCTION === 'true';
    const TOKEN = process.env?.TOKEN || '';
    const bot = new Telegraf(TOKEN);
    if (PRODUCTION) {
        USE_IN_CHATS.push('-1001635567203');
    }
    chatSuccess(bot, USE_IN_CHATS);
    generatedMessageHandlers(bot);
    bot
        .launch()
        .then(() => {
        console.log('test');
    })
        .catch(console.error);
    return bot;
});
//# sourceMappingURL=index.js.map
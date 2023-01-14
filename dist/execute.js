import * as dotenv from 'dotenv';
import chalkTemplate from 'chalk-template';
export const execute = async (executedFunction) => {
    let result;
    try {
        console.clear();
        console.log(chalkTemplate `{blue [Yuri] |} bot launches...`);
        dotenv.config();
        process.on('ETIMEDOUT', message => {
            console.log(`ETIMEDOUT ${message ?? 'in process'}`);
        });
        result = await executedFunction();
        console.log(chalkTemplate `{blue [Yuri] |} bot is {blue successfully running} and working!`);
        process.once('SIGINT', () => result.bot.stop('SIGINT'));
        process.once('SIGTERM', () => result.bot.stop('SIGTERM'));
    }
    catch (e) {
        console.error(e);
    }
    return result;
};
//# sourceMappingURL=execute.js.map
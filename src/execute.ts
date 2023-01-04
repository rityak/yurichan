import * as dotenv from 'dotenv';

export const execute = async (executedFunction: () => any) => {
  let result: any;

  try {
    dotenv.config();

    process.on('ETIMEDOUT', message => {
      console.log(`ETIMEDOUT ${message ?? 'in process'}`);
    });

    result = executedFunction();

    process.once('SIGINT', () => result.bot.stop('SIGINT'));
    process.once('SIGTERM', () => result.bot.stop('SIGTERM'));
  } catch (e) {
    console.error(e);
  }

  return result;
};

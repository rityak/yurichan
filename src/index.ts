import { Telegraf } from 'telegraf';

import { Yuri } from './Yuri/Yuri.js';
import { yuriInterface } from './Yuri/YuriTypes.js';
import { yuriRegister } from './middlewares.js';
import { execute } from './execute.js';

await execute(() => {
  const TOKEN = process.env?.TOKEN || '';
  const bot: Telegraf = new Telegraf(TOKEN);
  const yuri: yuriInterface = new Yuri(bot);

  yuri.init().then(yuriRegister).catch(console.error);

  return yuri;
});

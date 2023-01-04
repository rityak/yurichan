import { Telegraf } from 'telegraf';

export interface yuriInterface {
  //* fields *//
  bot: Telegraf;
  database?: yuriDatabase;

  //* methods *//
  init: () => Promise<yuriInterface>;
  register: (database: yuriDatabase) => yuriInterface;
  start: () => void;
}

export interface yuriDatabase {
  parse?: any;
}

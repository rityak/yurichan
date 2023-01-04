import { Telegraf } from 'telegraf';
import { yuriDatabase, yuriInterface } from './YuriTypes.js';

export class Yuri implements yuriInterface {
  public db: yuriDatabase = {};
  constructor(public bot: Telegraf) {}

  public register(database: yuriDatabase) {
    this.db = database;

    if ('message' in this.db?.parse)
      this.parseMessagesHandlers(this.db.parse.message);

    return this;
  }

  public init(): Promise<yuriInterface> {
    return new Promise<yuriInterface>((resolve, reject) => {
      try {
        return resolve(this);
      } catch (error) {
        reject(error);
      }
    });
  }

  public start(): void {
    this.bot.launch().then(_ => _);
  }

  private parseMessagesHandlers(handlers: any[]) {
    console.log(handlers);
  }
}

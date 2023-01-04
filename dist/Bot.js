import * as dotenv from 'dotenv';
import process from 'node:process';
import chalk from 'chalk';
import chalkTemplate from 'chalk-template';
import { Telegraf } from 'telegraf';
import getLogger from './logger.js';
export default class YuriBot {
    constructor() {
        dotenv.config();
        this.log = getLogger(!!process.env.YURI_LOG ?? false);
        this.TOKEN = process.env.TOKEN ?? '';
        this.yuriBot = new Telegraf(this.TOKEN, {});
        this.yuriExtensions = {
            hooks: {
                messages: [],
            },
            instance: {},
        };
        this.log(chalkTemplate `
      {blue [Yuri] |} {blue telegram bot} start to run...
    `);
    }
    extensions(extensions) {
        for (let ExtensionConstructor of extensions) {
            const instance = new ExtensionConstructor();
            const extensionName = instance.name;
            this.yuriExtensions.instance[extensionName] = instance;
            if (instance?.messageHookHandler) {
                this.yuriExtensions.hooks?.messages?.push(...instance?.messageHookHandler());
            }
            this.log(chalkTemplate `
        {blue [Yuri] |} extension {green <${extensionName}/>} has been {blue register}
      `);
        }
        return this;
    }
    start() {
        this.messageHandler();
        this.yuriBot.launch({}).then(this.log);
        this.log(chalkTemplate `
      {blue [Yuri] |} has been {blue started!}
    `);
        process.once('SIGINT', () => this.yuriBot.stop('SIGINT'));
        process.once('SIGTERM', () => this.yuriBot.stop('SIGTERM'));
    }
    messageHandler() {
        this.yuriBot.on('message', async (context) => {
            console.time('message_handler');
            //@ts-ignore
            const text = context?.update?.message?.text || '';
            if (this.yuriExtensions.hooks.messages) {
                const messageHookHandles = this.yuriExtensions.hooks.messages;
                let result = { status: false };
                // for (const hookHandler of messageHookHandles) {
                //   if (result.status) continue;
                //   else result = hookHandler(text);
                // }
                messageHookHandles.some(hook => {
                    result = hook(text);
                    return result.status;
                });
                if (result.status && result.reactions) {
                    context.reply(result.reactions);
                }
                process.stdout.write(chalk.blue('[Yuri] | '));
                console.timeEnd('message_handler');
            }
        });
    }
    yuriExtensions;
    yuriBot;
    TOKEN;
    log;
}

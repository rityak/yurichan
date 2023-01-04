import { resolve, join } from 'node:path';
import { readFileSync } from 'fs';
import contains from './lib/contains.js';
import { choice } from './lib/random.js';
export default class YuriExtension {
    name;
    dict = {};
    constructor(options) {
        this.name = options.name;
        if (options?.dict) {
            this.dict = this.readDict(options.dict);
        }
    }
    messageHookHandler() {
        const dictHooks = this.dict?.message || [];
        const hookHandlers = [];
        dictHooks.forEach(hook => {
            hookHandlers.push(function hookHandler(message) {
                const status = contains(message, hook.triggers);
                return {
                    status,
                    reactions: status ? choice(hook.reactions) : [],
                    options: hook?.options || {},
                };
            });
        });
        return hookHandlers;
    }
    readDict(dictName) {
        const currentPath = resolve();
        const dictPath = join(currentPath, 'dictionary', dictName);
        const data = readFileSync(dictPath, {
            encoding: 'utf8',
            flag: 'r',
        }).toString();
        return JSON.parse(data);
    }
}

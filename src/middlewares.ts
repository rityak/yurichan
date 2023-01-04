import { yuriInterface } from './Yuri/YuriTypes.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const yuriRegister = (self: yuriInterface) => {
  const yuriParseString: string = readFileSync(resolve('./db/yuriParse.json'), {
    encoding: 'utf-8',
  });

  self.register({
    parse: JSON.parse(yuriParseString),
  });

  return self;
};

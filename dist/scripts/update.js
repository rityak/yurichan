import { $ } from 'zx';
import isAdmin from '../yuri/utils/isAdmin.js';
export default function updateBot(bot) {
    bot.command('update', context => {
        const user_id = context?.update?.message?.from?.id.toString();
        const success = isAdmin(user_id);
        setTimeout(async () => {
            if (success) {
                bot.stop();
                await $ `npm run start`;
            }
        }, 1000);
    });
}
//# sourceMappingURL=update.js.map
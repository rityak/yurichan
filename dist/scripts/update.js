import { exec } from 'node:child_process';
import isAdmin from '../yuri/utils/isAdmin.js';
export default function updateBot(bot) {
    bot.command('update', context => {
        const user_id = context?.update?.message?.from?.id.toString();
        const success = isAdmin(user_id);
        setTimeout(async () => {
            console.log(success);
            if (success) {
                bot.stop();
                exec('npm run start', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                });
            }
        }, 100);
    });
}
//# sourceMappingURL=update.js.map
/* spell-checker: disable  */
import { smile } from './yuri.database.js';
export const messageHandlersModel = [
    {
        triggers: [['люб', 'love', 'любимая', 'лубофь']],
        reactions: [
            [
                'я тебя тоже люблю ня~',
                '* юрийные звуки *',
                '* активировала любовную ауру *',
                'нях~',
            ],
            smile.good.jap,
        ],
    },
    {
        triggers: [['ииха', 'ихха', 'ихха']],
        reactions: [['БОМ-БОМ', 'БОМ БОМ']],
    },
    {
        triggers: [['обнял', 'обнимаю', 'обняла', 'обниму']],
        reactions: [
            [
                'как мило ',
                'милота та какая ',
                'so cute ',
                'ути бози мой ',
                'а ты знаешь толк в няшных делах',
                'ооо как это мило',
                'тоже так хотю',
                'няшные дела это хорошо, юрийные ещё лучше!',
                'каваййй',
                'ооо это по нашему',
                'юрийных дел хочеца',
            ],
            smile.good.jap,
        ],
        options: {
            chance: 0.5,
        },
    },
];
//# sourceMappingURL=messageHandlers.model.js.map
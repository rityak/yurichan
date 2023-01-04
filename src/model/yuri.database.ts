interface typeSmile {
  good: {
    jap: string[];
    classic: string[];
  };
  neutral: {
    jap: string[];
  };
  bad: {
    jap: string[];
    classic: string[];
  };
  tilda: string[];
}

export const yuri: string[] = [
  'юри',
  'юричка',
  'yuri',
  'юренция',
  'юрася',
  'юраченька',
  'юрасенька',
];

export const smile: typeSmile = {
  good: {
    jap: [
      '(¬‿¬)',
      '(◕‿◕)♡',
      '(((༼•̫͡•༽)))',
      'ʕ◉ᴥ◉ʔ',
      '(●´ω｀●)',
      '(ᵔᴥᵔ)',
      '(◕‿◕)',
      '(づ｡◕‿‿◕｡)づ',
    ],
    classic: [':3', '<3', ')', ':)', '=*', ':D', '=D', '=3', ':>'],
  },
  neutral: {
    jap: ['¯_(ツ)_/¯', '( ͡° ͜ʖ ͡°)', '(ಠ_ಠ)', 'ಠoಠ', '⊙﹏⊙', '(⊙ω⊙)'],
  },
  bad: {
    jap: ['⊙︿⊙', '(╥_╥)', '┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿', 'ᕦ༼◣_◢༽つ', '(；一_一)'],
    classic: [':‹', ':(', '(', '-_-', '=(', '>:(', '>_<', 'o_O'],
  },
  tilda: ['~', '~', '~~', '~~~'],
};

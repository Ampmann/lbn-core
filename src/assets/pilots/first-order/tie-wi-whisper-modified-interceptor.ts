import { ShipType } from '../../../types';

const t: ShipType = {
  name: { en: 'TIE/wi Whisper Modified Interceptor' },
  xws: 'tiewiwhispermodifiedinterceptor',
  size: 'Small',
  ffg: 88,
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FB',
    '5KR',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Boost',
    },
  ],
  icon: '???',
  pilots: [
    {
      name: { en: 'Kylo Ren' },
      xws: 'kyloren-tiewiwhispermodifiedinterceptor',
      initiative: 5,
      limited: 1,
      hyperspace: true,
      cost: 63,
      slots: [
        'Force Power',
        'Talent',
        'Missile',
        'Tech',
        'Tech',
        'Configuration',
      ],
      ability: {
        en:
          'Before an enemy ship in your [Bullseye Arc] is dealt a facedown damage card, you may spend 1 [Force]. If you do, that damage card is dealt faceup instead.',
      },
      ffg: 919,
      artwork: '???',
      caption: { en: 'Supreme Leader of the First Order' },
      keywords: ['TIE', 'Dark Side'],
      force: { value: 3, recovers: 1, side: ['dark'] },
      epic: true,
      image: { en: '???' },
    },
    {
      name: { en: '"Wrath"' },
      xws: 'wrath',
      initiative: 5,
      limited: 1,
      hyperspace: true,
      cost: 53,
      slots: ['Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ability: {
        en:
          'After you perform a [Bullseye Arc] attack, if you have 1 or more non-lock red or orange tokens, you may perform a bonus attack against a different target.',
      },
      ffg: 920,
      artwork: '???',
      caption: { en: 'Herald of Destruction' },
      keywords: ['TIE'],
      epic: true,
      image: { en: '???' },
    },
    {
      name: { en: '"Nightfall"' },
      xws: 'nightfall',
      initiative: 4,
      limited: 1,
      text: { en: '???' },
      hyperspace: true,
      cost: 49,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 921,
      artwork: '???',
      keywords: ['TIE'],
      epic: true,
      image: { en: '???' },
      caption: { en: '709th Legion Veteran' },
      ability: {
        en:
          'After you fully execute a maneuver or perform a [Boost] action, each ship you moved through gains 2 jam tokens.',
      },
    },
    {
      name: { en: '"Whirlwind"' },
      xws: 'whirlwind',
      initiative: 3,
      limited: 1,
      text: { en: '???' },
      hyperspace: true,
      cost: 47,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 922,
      artwork: '???',
      keywords: ['TIE'],
      epic: true,
      image: { en: '???' },
      caption: { en: 'Reap What You Sow' },
      ability: {
        en:
          'Before you engage, you may remove any number of jam tokens, then you may gain 1 focus token for each enemy ship that has you in its [Front Arc].',
      },
    },
    {
      name: { en: '709th Legion Ace' },
      xws: '709thlegionace',
      initiative: 4,
      limited: 0,
      text: {
        en:
          "Commanded by Supreme Leader Kylo Ren, the 709th Legion fights without mercy or remorse to crush the Resistance and bring the galaxy under the First Order's dominion.",
      },
      hyperspace: true,
      cost: 47,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 923,
      artwork: '???',
      keywords: ['TIE'],
      epic: true,
      image: { en: '???' },
    },
    {
      name: { en: 'Red Fury Zealot' },
      xws: 'redfuryzealot',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'Also called Red Fury, the 709th Legion is charged by Supreme Leader Kylo Ren with rooting out dissenters at Black Spire Outpost.',
      },
      hyperspace: true,
      cost: 44,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 924,
      artwork: '???',
      keywords: ['TIE'],
      epic: true,
      image: { en: '???' },
    },
  ],
};

export default t;

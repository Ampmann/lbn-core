import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/se Bomber',
  xws: 'tiesebomber',
  size: 'Small',
  ffg: 87,
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    { difficulty: 'Red', type: 'Boost' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Reload',
    },
  ],
  ability: {
    name: 'Pursuit Thrusters',
    text: 'During the System Phase, you may perform a [Boost] action',
  },
  icon: '???',
  pilots: [
    {
      name: '“Breach”',
      xws: 'breach',
      initiative: 5,
      limited: 1,
      standard: true,
      cost: 6,
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Torpedo',
        'Torpedo',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
      ],
      ability:
        'After you fully execute a maneuver or perform a [Boost] action, if you moved through an enemy ship, you may acquire a lock on that ship.',
      ffg: 913,
      caption: 'Ordnance Expert',
      keywords: ['TIE'],
      epic: true,
      loadout: 20,
      extended: true,
    },
    {
      name: '“Scorch”',
      xws: 'scorch-tiesebomber',
      initiative: 4,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Tech',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
        'Modification',
      ],
      ability:
        'While a friendly ship at range 0-1 performs a primary attack, it may spend 1 [Hit] result. If it does, after defending, the defender gains 1 strain token.',
      ffg: 914,
      caption: 'Jad Bean',
      keywords: ['TIE'],
      epic: true,
      loadout: 10,
      extended: true,
    },
    {
      name: '“Dread”',
      xws: 'dread',
      initiative: 3,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Tech',
        'Torpedo',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      text: '???',
      ffg: 915,
      keywords: ['TIE'],
      epic: true,
      caption: 'Devotee of Devastation',
      ability:
        'After you reload, each ship in your [Bullseye Arc] gains 1 deplete token.',
      loadout: 12,
      extended: true,
    },
    {
      name: '“Grudge”',
      xws: 'grudge',
      initiative: 2,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Tech',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      ability:
        'While a friendly bomb or mine at range 0-2 detonates, each time attack dice are rolled to resolve its effect, you may reroll up to 1 of those dice.',
      ffg: 916,
      caption: 'Hateful Harrier',
      keywords: ['TIE'],
      epic: true,
      loadout: 15,
      extended: true,
    },
    {
      name: 'First Order Cadet',
      xws: 'firstordercadet',
      initiative: 3,
      limited: 0,
      standard: true,
      cost: 4,
      slots: [
        'Tech',
        'Torpedo',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      text:
        'The live-fire exercises of the First Order are intended to root out the weak, enforcing the maxim that only the strong survive.',
      ffg: 917,
      keywords: ['TIE'],
      epic: true,
      loadout: 7,
      extended: true,
    },
    {
      name: 'Sienar-Jaemus Test Pilot',
      xws: 'sienarjaemustestpilot',
      initiative: 2,
      limited: 0,
      standard: true,
      cost: 4,
      slots: ['Tech', 'Tech', 'Missile', 'Device', 'Device', 'Modification'],
      text:
        'Equipped with four laser cannons and advanced systems, the TIE/se bomber is a remarkably maneuverable craft that brings devastating ordnance to bear against any who dare to stand against the First Order.',
      ffg: 918,
      keywords: ['TIE'],
      epic: true,
      loadout: 8,
      extended: true,
    },
  ],
};

export default t;

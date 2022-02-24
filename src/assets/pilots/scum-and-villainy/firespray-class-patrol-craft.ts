import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Firespray-class Patrol Craft',
  xws: 'firesprayclasspatrolcraft',
  ffg: 10,
  size: 'Medium',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_FIrespray.png',
  pilots: [
    {
      name: 'Boba Fett',
      caption: 'Notorious Bounty Hunter',
      initiative: 5,
      limited: 1,
      cost: 10,
      xws: 'bobafett',
      ability:
        'While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1.',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 149,
      standard: true,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 22,
      extended: true,
    },
    {
      name: 'Bounty Hunter',
      initiative: 2,
      limited: 0,
      cost: 7,
      xws: 'bountyhunter',
      text:
        'The Firespray-class patrol craft is infamous for its association with the deadly bounty hunters Jango Fett and Boba Fett, who packed their craft with countless deadly armaments.',
      slots: ['Cannon', 'Missile', 'Device', 'Illicit'],
      ffg: 154,
      standard: true,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 6,
      extended: true,
    },
    {
      name: 'Emon Azzameen',
      caption: 'Shipping Magnate',
      initiative: 4,
      limited: 1,
      cost: 7,
      xws: 'emonazzameen',
      ability:
        'If you would drop a device using a (1 [Straight]) template, you may use the (3 [Turn Left]), (3 [Straight]), or (3 [Turn Right]) template instead.',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 150,
      standard: true,
      epic: true,
      loadout: 12,
      extended: true,
    },
    {
      name: 'Kath Scarlet',
      caption: 'Captain of the Binayre Pirates',
      initiative: 4,
      limited: 1,
      cost: 7,
      xws: 'kathscarlet',
      ability:
        'While you perform a primary attack, if there is at least 1 friendly non-limited ship at range 0 of the defender, roll 1 additional attack die.',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 151,
      standard: true,
      epic: true,
      loadout: 13,
      extended: true,
    },
    {
      name: 'Koshka Frost',
      caption: 'Icy Professional',
      initiative: 3,
      limited: 1,
      cost: 7,
      xws: 'koshkafrost',
      ability:
        'While you defend or perform an attack, if the enemy ship is stressed, you may reroll 1 of your dice.',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 152,
      standard: true,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 11,
      extended: true,
    },
    {
      name: 'Krassis Trelix',
      caption: 'Imperial Deserter',
      initiative: 3,
      limited: 1,
      cost: 8,
      xws: 'krassistrelix',
      ability:
        'You can perform [Front Arc] special attacks from your [Rear Arc]. While you perform a special attack, you may reroll 1 attack die.',
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 153,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
    },
  ],
};

export default t;

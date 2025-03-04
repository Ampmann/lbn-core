import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'BTL-A4 Y-wing',
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_Y-wing.png',
  pilots: [
    {
      name: '“Dutch” Vander',
      caption: 'Gold Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'dutchvander',
      ability:
        'After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 14,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dutchvander.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dutchvander.png',
    },
    {
      name: 'Evaan Verlaine',
      caption: 'Gold Three',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'evaanverlaine',
      ability:
        'At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
      ],
      ffg: 16,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/evaanverlaine.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/evaanverlaine.png',
    },
    {
      name: 'Gold Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'goldsquadronveteran',
      text:
        'Commanded by Jon "Dutch" Vander, Gold Squadron played an instrumental role in the Battles of Scarif and Yavin.',
      slots: ['Turret', 'Missile', 'Modification'],
      ffg: 17,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/goldsquadronveteran.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/goldsquadronveteran.png',
    },
    {
      name: 'Gray Squadron Bomber',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'graysquadronbomber',
      text:
        'Long after the Y-wing was phased out by the Galactic Empire, its durability, dependability, and heavy armament help it remain a staple in the Rebel fleet.',
      slots: ['Device', 'Missile', 'Modification'],
      ffg: 18,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/graysquadronbomber.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/graysquadronbomber.png',
    },
    {
      name: 'Horton Salm',
      caption: 'Gray Leader',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'hortonsalm',
      ability:
        'While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Modification',
      ],
      ffg: 15,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/hortonsalm.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hortonsalm.png',
    },
    {
      name: 'Norra Wexley',
      caption: 'Gold Nine',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'norrawexley-btla4ywing',
      ability:
        'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
      slots: [
        'Talent',
        'Turret',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      ffg: 13,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 18,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/norrawexley-btla4ywing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/norrawexley-btla4ywing.png',
    },
    {
      name: 'Dex Tiree',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'dextiree-battleofyavin',
      ability:
        'While you defend, if there is at least 1 other friendly ship at range 0-1, you may roll 1 additional defense die.',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      extended: true,
      standardLoadout: true,
      upgrades: [
        {
          title: 'Dorsal Turret',
          ability: 'Attack',
          slots: ['Turret'],
          attack: {
            arc: 'Single Turret Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: false,
          },
        },
        {
          title: 'Adv. Proton Torpedoes',
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          slots: ['Torpedo'],
          charges: { value: 1, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 5,
            minrange: 1,
            maxrange: 1,
            ordnance: true,
          },
        },
        {
          title: 'R4 Astromech',
          ability:
            'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          slots: ['Astromech'],
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dextiree-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dextiree-battleofyavin.png',
    },
    {
      name: '“Dutch” Vander',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'dutchvander-battleofyavin',
      ability:
        'After you spend a lock during an attack, choose a friendly ship at range 1-3. The chosen ship may acquire a lock on the defender.',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      extended: true,
      standardLoadout: true,
      upgrades: [
        {
          title: 'Ion Cannon Turret',
          ability:
            'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          slots: ['Turret'],
          attack: {
            arc: 'Single Turret Arc',
            value: 3,
            minrange: 1,
            maxrange: 2,
            ordnance: false,
          },
        },
        {
          title: 'Adv. Proton Torpedoes',
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          slots: ['Torpedo'],
          charges: { value: 1, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 5,
            minrange: 1,
            maxrange: 1,
            ordnance: true,
          },
        },
        {
          title: 'Targeting Astromech',
          ability:
            'After you perform a [Lock] action, you may perform a red [Rotate Arc] action.',
          slots: ['Astromech'],
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dutchvander-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dutchvander.png',
    },
    {
      name: 'Hol Okand',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'holokand-battleofyavin',
      ability:
        'During the System Phasse, if there are no enemy ships at range 1-2, you may recover 1 [Charge] on any upgrade.',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      extended: true,
      standardLoadout: true,
      upgrades: [
        {
          title: 'Dorsal Turret',
          ability: 'Attack',
          slots: ['Turret'],
          attack: {
            arc: 'Single Turret Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: false,
          },
        },
        {
          title: 'Adv. Proton Torpedoes',
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          slots: ['Torpedo'],
          charges: { value: 1, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 5,
            minrange: 1,
            maxrange: 1,
            ordnance: true,
          },
        },
        {
          title: 'Precise Astromech ',
          ability:
            'After you perform an action, you may spend 1 [Charge] to perform a red [Lock] action.',
          slots: ['Astromech'],
          charges: { value: 2, recovers: 0 },
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/holokand-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/holokand-battleofyavin.png',
    },
    {
      name: '“Pops” Krail',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'popskrail-battleofyavin',
      ability:
        'While you perform a [Single Turret Arc] attack, you may reroll up to 2 attack dice.',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      extended: true,
      standardLoadout: true,
      upgrades: [
        {
          title: 'Ion Cannon Turret',
          ability:
            'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          slots: ['Turret'],
          attack: {
            arc: 'Single Turret Arc',
            value: 3,
            minrange: 1,
            maxrange: 2,
            ordnance: false,
          },
        },
        {
          title: 'Adv. Proton Torpedoes',
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          slots: ['Torpedo'],
          charges: { value: 1, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 5,
            minrange: 1,
            maxrange: 1,
            ordnance: true,
          },
        },
        {
          title: 'R4 Astromech',
          ability:
            'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          slots: ['Astromech'],
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/popskrail-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/popskrail-battleofyavin.png',
    },
    {
      name: '“Pops” Krail',
      caption: 'Gold Five',
      initiative: 3,
      limited: 1,
      cost: 4,
      loadout: 16,
      xws: 'popskrail',
      ability:
        'After you fully execute a white maneuver, you may choose a friendly ship at range 0-1. If you do, it may perform a [Focus] action.',
      image: 'https://infinitearenas.com/xw2/images/pilots/popskrail.png',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Missile',
        'Modification',
      ],
      standard: true,
      extended: true,
      keywords: ['Y-wing'],
      epic: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/popskrail.png',
    },
  ],
};

export default t;

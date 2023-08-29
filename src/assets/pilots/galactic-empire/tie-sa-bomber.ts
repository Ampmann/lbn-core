import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/sa Bomber',
  xws: 'tiesabomber',
  ffg: 19,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '5KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: 'Nimble Bomber',
    text:
      'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEBomber.png',
  pilots: [
    {
      name: '“Deathfire”',
      caption: 'Unflinching Diehard',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'deathfire',
      ability:
        'After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device.',
      slots: [
        'Torpedo',
        'Torpedo',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
      ],
      ffg: 110,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/deathfire.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/deathfire.png',
    },
    {
      name: 'Captain Jonus',
      caption: 'Disciplined Instructor',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'captainjonus',
      ability:
        'While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.',
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 108,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/captainjonus.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainjonus.png',
    },
    {
      name: 'Gamma Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'gammasquadronace',
      text:
        "Though it sacrifices a degree of speed and maneuverability compared to a TIE/ln, the TIE bomber's increased payload can carry enough firepower to destroy virtually any enemy target.",
      slots: ['Torpedo', 'Gunner', 'Device', 'Device', 'Modification'],
      ffg: 111,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/gammasquadronace.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gammasquadronace.png',
    },
    {
      name: 'Major Rhymer',
      caption: 'Scimitar Leader',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'majorrhymer',
      ability:
        'While you perform a [Torpedo] or [Missile] attack, you may increase or decrease the range requirement by 1, to a limit of 0-3.',
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
      ],
      ffg: 109,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/majorrhymer.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/majorrhymer.png',
    },
    {
      name: 'Scimitar Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'scimitarsquadronpilot',
      text:
        'The TIE/sa is exceptionally nimble for a bomber, allowing it to pinpoint its target while avoiding excessive collateral damage to the surrounding area.',
      slots: ['Missile', 'Gunner', 'Device', 'Device', 'Modification'],
      ffg: 112,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/scimitarsquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/scimitarsquadronpilot.png',
    },
    {
      name: 'Tomax Bren',
      caption: 'Brash Maverick',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'tomaxbren',
      ability:
        'After you perform a [Reload] action, you may recover 1 [Charge] token on 1 of your equipped [Talent] upgrade cards.',
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 107,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/tomaxbren.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tomaxbren.png',
    },
    {
      name: '“Deathfire”',
      caption: 'Obstinate Bombardier',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'deathfire-swz98',
      ability:
        'After you fully execute a speed 3-5 maneuver, if you have not dropped or launched a device this round, you may spend 2 [Charge] to drop or launch a bomb using the 3 [Straight] template.',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      charges: { value: 2, recovers: 1 },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/deathfire-swz98.png',
      standardLoadout: ['swiftapproach-swz98', 'connernets', 'protonbombs'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/deathfire.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      slots: [],
    },
    {
      name: 'Captain Jonus',
      caption: 'Top Cover',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'captainjonus-swz98',
      ability:
        'While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/captainjonus-swz98.png',
      standardLoadout: ['topcover-swz98', 'barragerockets', 'protonbombs'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainjonus.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      slots: [],
    },
    {
      name: 'Tomax Bren',
      caption: 'Scimitar Veteran',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'tomaxbren-swz98',
      ability:
        'After you perform a [Barrel Roll] action, you may spend 2 [Charge]. If you do, gain a focus token.',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      charges: { value: 2, recovers: 1 },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/tomaxbren-swz98.png',
      standardLoadout: ['truegrit-swz98', 'plasmatorpedoes', 'ionbombs'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tomaxbren.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      slots: [],
    },
    {
      name: 'Major Rhymer',
      caption: 'Precision Destruction',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'majorrhymer-swz98',
      ability:
        'While you perform a [Torpedo] attack, if the defender is in your [Bullseye Arc], change 1 [Focus] result to a [Critical Hit] result.',
      shipAbility: {
        name: 'Nimble Bomber',
        text:
          'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/majorrhymer-swz98.png',
      standardLoadout: [
        'advprotontorpedoes',
        'automatedloaders-swz98',
        'afterburners',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/majorrhymer.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      slots: [],
    },
  ],
};

export default t;

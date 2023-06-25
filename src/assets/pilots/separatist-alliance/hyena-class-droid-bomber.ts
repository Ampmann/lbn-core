import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Hyena-class Droid Bomber',
  xws: 'hyenaclassdroidbomber',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1FW',
    '1NR',
    '1YW',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '2KR',
    '3TW',
    '3FB',
    '3YW',
    '4FW',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Lock' },
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: 'Networked Calculations',
    text:
      'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
  },
  pilots: [
    {
      name: 'Techno Union Bomber',
      initiative: 1,
      limited: 0,
      xws: 'technounionbomber',
      text:
        'Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Torpedo', 'Device', 'Modification', 'Configuration'],
      ffg: 568,
      keywords: ['Droid'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/technounionbomber.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/technounionbomber.png',
    },
    {
      name: 'Bombardment Drone',
      caption: 'Time on Target',
      limited: 3,
      initiative: 3,
      xws: 'bombardmentdrone',
      ability:
        'If you would drop a device, you may launch that device instead, using the same template.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Device', 'Device', 'Modification', 'Configuration'],
      ffg: 565,
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/bombardmentdrone.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bombardmentdrone.png',
    },
    {
      name: 'DBS-404',
      xws: 'dbs404',
      initiative: 4,
      limited: 1,
      ability:
        'While you perform an attack at attack range 1, you <strong>must</strong> roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 563,
      caption: 'Preservation Protocol Not Found',
      keywords: ['Droid'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dbs404.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs404.png',
    },
    {
      name: 'Baktoid Prototype',
      caption: 'Function over Form',
      xws: 'baktoidprototype',
      initiative: 1,
      limited: 2,
      ability:
        'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Sensor', 'Missile', 'Missile', 'Modification', 'Configuration'],
      ffg: 566,
      keywords: ['Droid'],
      loadout: 9,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/baktoidprototype.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baktoidprototype.png',
    },
    {
      name: 'Separatist Bomber',
      xws: 'separatistbomber',
      initiative: 3,
      limited: 0,
      text:
        'The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 567,
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/separatistbomber.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/separatistbomber.png',
    },
    {
      name: 'DBS-32C',
      xws: 'dbs32c',
      caption: 'Droid Control Signal Relay',
      limited: 1,
      initiative: 3,
      ability:
        'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Sensor', 'Tactical Relay', 'Modification', 'Configuration'],
      ffg: 564,
      keywords: ['Droid'],
      loadout: 16,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dbs32c.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs32c.png',
    },
    {
      name: 'DBS-32C',
      xws: 'dbs32c-siegeofcoruscant',
      caption: 'Siege of Coruscant',
      limited: 1,
      initiative: 3,
      ability:
        'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      standard: true,
      epic: true,
      cost: 3,
      slots: [],
      keywords: ['Droid'],
      loadout: 16,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dbs32c-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs32c.png',
      standardLoadout: [
        'plasmatorpedoes',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
    },
    {
      name: 'DBS-404',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'dbs404-siegeofcoruscant',
      ability:
        'While you perform an attack at range 1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
      shipAbility: {
        name: 'Networked Calculations',
        text:
          'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dbs404-siegeofcoruscant.png',
      slots: [],
      standardLoadout: [
        'advprotontorpedoes',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs404.png',
      standard: true,
      extended: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Baktoid Prototype',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 2,
      cost: 3,
      xws: 'baktoidprototype-siegeofcoruscant',
      ability:
        'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
      shipAbility: {
        name: 'Networked Calculations',
        text:
          'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/baktoidprototype-siegeofcoruscant.png',
      standardLoadout: [
        'homingmissiles',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baktoidprototype.png',
      standard: true,
      extended: true,
      keywords: ['Droid'],
      epic: true,
    },
  ],
  ffg: 64,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Hyena.png',
};

export default t;

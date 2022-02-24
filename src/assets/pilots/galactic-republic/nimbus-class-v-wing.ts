import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Nimbus-class V-wing',
  xws: 'nimbusclassvwing',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1NR',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Barrel Roll', difficulty: 'Red' },
    {
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Lock' },
      difficulty: 'White',
    },
  ],
  ability: {
    name: 'Twin Ion Engines',
    text: 'Ignore the "TIE" ship restriction on upgrade cards.',
  },
  pilots: [
    {
      name: 'Wilhuff Tarkin',
      caption: 'Aspiring Admiral',
      initiative: 3,
      limited: 1,
      xws: 'wilhufftarkin',
      ability:
        'During the System Phase, you may choose an object that you have locked at range 1-3. Another friendly ship at range 1-3 may acquire a lock on that object.',
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      cost: 3,
      ffg: 791,
      loadout: 10,
      extended: true,
    },
    {
      xws: 'oddball-nimbusclassvwing',
      ffg: 788,
      name: '“Odd Ball”',
      cost: 4,
      limited: 1,
      initiative: 5,
      caption: 'CC-2237',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      keywords: ['Clone'],
      loadout: 12,
      extended: true,
    },
    {
      name: '“Contrail”',
      xws: 'contrail',
      initiative: 5,
      limited: 1,
      caption: 'CT-4981',
      standard: true,
      ability:
        "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      slots: ['Configuration'],
      cost: 2,
      epic: true,
      ffg: 789,
      keywords: ['Clone'],
      loadout: 0,
      extended: true,
    },
    {
      name: '“Klick”',
      xws: 'klick',
      initiative: 4,
      limited: 1,
      caption: 'GC-1000',
      standard: true,
      ability:
        'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 790,
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
    },
    {
      name: 'Shadow Squadron Escort',
      xws: 'shadowsquadronescort',
      initiative: 3,
      limited: 0,
      text:
        "In the waning months of the Clone Wars, elite clone formations carry out missions critical to the future of the Republic; such as the protection of Supreme Chancellor Palpatine's personal shuttle.",
      standard: true,
      slots: ['Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 792,
      keywords: ['Clone'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Loyalist Volunteer',
      xws: 'loyalistvolunteer',
      initiative: 2,
      limited: 0,
      text:
        'The Kuat Systems Engineering Alpha-3 Nimbus-class V-wing is the vessel of choice for clone and non-clone starfighter pilots alike. The techniques pioneered to mass-produce its precision ion engines will later be crucial in the development of the TIE series by Sienar Fleet Systems.',
      standard: true,
      slots: ['Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 793,
      loadout: 4,
      extended: true,
    },
  ],
  ffg: 71,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Nimbus-class_V-wing.png',
};

export default t;

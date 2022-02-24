import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/ln Fighter',
  xws: 'tielnfighter',
  ffg: 11,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
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
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEFighter.png',
  pilots: [
    {
      name: '“Howlrunner”',
      caption: 'Obsidian Leader',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'howlrunner',
      ability:
        'While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die.',
      slots: [
        'Talent',
        'Talent',
        'Modification',
        'Modification',
        'Modification',
      ],
      ffg: 81,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
    },
    {
      name: '“Mauler” Mithel',
      caption: 'Black Two',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'maulermithel',
      ability:
        'While you perform an attack at attack range 1, roll 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 80,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: '“Night Beast”',
      caption: 'Obsidian Two',
      initiative: 2,
      limited: 1,
      cost: 2,
      xws: 'nightbeast',
      ability:
        'After you fully execute a blue maneuver, you may perform a [Focus] action.',
      slots: [],
      ffg: 88,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 0,
      extended: true,
    },
    {
      name: '“Scourge” Skutu',
      caption: 'Seasoned Veteran',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'scourgeskutu',
      ability:
        'While you perform an attack against a defender in your [Bullseye Arc], roll 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 82,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: '“Wampa”',
      caption: 'Black Eleven',
      initiative: 1,
      limited: 1,
      cost: 3,
      xws: 'wampa',
      ability:
        'While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 89,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Academy Pilot',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'academypilot',
      text:
        'The Galactic Empire uses the fast and agile TIE/ln, developed by Sienar Fleet Systems and produced in staggering quantity, as its primary starfighter.',
      slots: ['Modification'],
      ffg: 92,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Black Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'blacksquadronace',
      text:
        'The elite TIE/ln pilots of Black Squadron accompanied Darth Vader on a devastating strike against the Rebel forces at the Battle of Yavin.',
      slots: ['Talent', 'Modification'],
      ffg: 90,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
    },
    {
      name: 'Del Meeko',
      caption: 'Inferno Three',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'delmeeko',
      ability:
        'While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.',
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 85,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Gideon Hask',
      caption: 'Inferno Two',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'gideonhask',
      ability:
        'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      slots: ['Talent', 'Talent'],
      ffg: 84,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Iden Versio',
      caption: 'Inferno Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'idenversio',
      ability:
        'Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.',
      charges: { value: 1, recovers: 0 },
      slots: [
        'Talent',
        'Talent',
        'Cannon',
        'Torpedo',
        'Missile',
        'Modification',
      ],
      ffg: 83,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
    },
    {
      name: 'Obsidian Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 2,
      xws: 'obsidiansquadronpilot',
      text:
        "The TIE fighter's Twin Ion Engine system was designed for speed, making the TIE/ln one of the most maneuverable starships ever mass-produced.",
      slots: [],
      ffg: 91,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 0,
      extended: true,
    },
    {
      name: 'Seyn Marana',
      caption: 'Inferno Four',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'seynmarana',
      ability:
        'While you perform an attack, you may spend 1 [Critical Hit] result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.',
      slots: ['Talent', 'Talent'],
      ffg: 86,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Valen Rudor',
      caption: 'Braggadocious Baron',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'valenrudor',
      ability:
        'After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.',
      slots: ['Talent', 'Modification'],
      ffg: 87,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
    },
    {
      name: 'ISB Jingoist',
      caption: 'Heartless Enforcer',
      initiative: 4,
      limited: 2,
      xws: 'isbjingoist',
      ability:
        'Before you engage, you may choose 1 enemy ship in your [Front Arc] at range 0-1. If you do, that ship gains 1 deplete or strain token of your choice unless it chooses to remove 1 green token.',
      slots: ['Talent', 'Illicit', 'Modification'],
      keywords: ['TIE'],
      cost: 3,
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
    },
    {
      name: 'Moff Gideon',
      caption: 'Ruthless Remnant Leader',
      initiative: 4,
      limited: 1,
      xws: 'moffgideon',
      charges: { value: 2, recovers: 1 },
      ability:
        'While an enemy ship at range 1-3 defends, before attack dice are rolled, you may spend 1 [Charge] and choose a friendly ship at range 0-1 of the defender. If you do, defense dice cannot be modified during this attack and the chosen friendly ship gains 1 strain token.',
      slots: ['Talent', 'Missile', 'Illicit', 'Illicit', 'Modification'],
      keywords: ['TIE'],
      cost: 4,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
    },
  ],
};

export default t;

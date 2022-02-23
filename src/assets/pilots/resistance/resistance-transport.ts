import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Resistance Transport',
    de: 'Transporter des Widerstands',
    fr: 'Transport de la Résistance',
    es: 'Caza estelar real N-1 de Naboo',
  },
  xws: 'resistancetransport',
  size: 'Small',
  dial: [
    '0OR',
    '1AR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1DR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: { en: 'Cova Nell' },
      xws: 'covanell',
      initiative: 4,
      limited: 1,
      standard: true,
      epic: true,
      ability: {
        en:
          'While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls dein aufgedecktes Manöver rot ist, wirf 1 zusätzlichen Würfel.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, si votre manœuvre révélée est rouge, lancez 1 dé supplémentaire.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, si tu maniobra revelada es roja, tira 1 dado adicional.',
      },
      slots: [
        'Talent',
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 5,
      ffg: 569,
      caption: {
        en: 'Evacuation Escort',
        de: 'Expertin für Evakuierungen',
        fr: "Escorte d'Évacuation",
        es: 'Escolta de evacuación',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/27956dc3600e6e06bf26f9a981205410.jpg',
      loadout: 20,
      extended: true,
    },
    {
      name: { en: 'Pammich Nerro Goode' },
      xws: 'pammichnerrogoode',
      initiative: 3,
      limited: 1,
      caption: {
        en: "D'Qar Dispatcher",
        de: "Hauptdisponentin von D'Qar",
        fr: "Régulatrice D'Qar",
        es: "Transportista de D'Qar",
      },
      standard: true,
      epic: true,
      ability: {
        en:
          'While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.',
        de:
          'Solange du 2 oder weniger Stressmarker hast, darfst du rote Manöver ausführen, auch solange du gestresst bist.',
        fr:
          'Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez exécuter des manœuvres rouges même si vous êtes stressé.',
        es:
          'Mientras tienes 2 o menos fichas de Tensión, puedes ejecutar maniobras rojas incluso aunque estés bajo tensión.',
      },
      slots: [
        'Sensor',
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 4,
      ffg: 570,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/e5f2e692fcaf63d513cd5c7c1294283e.jpg',
      loadout: 12,
      extended: true,
    },
    {
      name: { en: 'Nodin Chavdri' },
      xws: 'nodinchavdri',
      initiative: 2,
      limited: 1,
      standard: true,
      epic: true,
      ability: {
        en:
          'After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.',
        de:
          'Nachdem du koordiniert hast oder koordiniert worden bist, falls du 2 oder weniger Stressmarker hast, darfst du 1 Aktion aus deiner Aktionsleiste als rote Aktion durchführen, auch falls du gestresst bist.',
        fr:
          "Après avoir coordonné ou avoir été coordonné, si vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer 1 action de votre barre d'action en tant qu'action rouge, même si vous êtes stressé.",
        es:
          'Después de que coordines o seas coordinados, si tienes 2 o menos fichas de Tensión, puedes realizar 1 acción en tu barra de acciones como una acción roja, incluso aunque estés bajo tensión.',
      },
      slots: [
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Missile',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 5,
      ffg: 571,
      caption: {
        en: 'Insubordinate Insurgent',
        de: 'Ungehorsamer Widerstandskämpfer',
        fr: 'Insurgé Indiscipliné',
        es: 'Insurgente insubordinado',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b0179494a00c2538a4467793e722db3e.jpg',
      loadout: 16,
      extended: true,
    },
    {
      name: {
        en: 'Logistics Division Pilot',
        de: 'Pilot der Logistikdivision',
        fr: 'Pilote de la Division Logistique',
        es: 'Piloto de la división de logística',
      },
      xws: 'logisticsdivisionpilot',
      initiative: 1,
      limited: 0,
      text: {
        en:
          'Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.',
        de:
          'Ohne den Rückhalt der Neuen Republik sind die Kämpfer des Widerstands oft gezwungen, neben ihren eigentlichen Pflichten auch als Transporterpiloten oder Mechaniker zu arbeiten. Auf diese Weise setzen sie ihr Können und ihr technisches Fachwissen für den Kampf gegen die Erste Ordnung ein.',
        fr:
          "En l'absence de soutien de la Nouvelle République, les membres de la Résistance ont souvent une double fonction en tant que pilote de transport et mécanicien, mettant à profit leurs compétences et leur savoir technique au service du combat contre le Premier Ordre.",
        es:
          'Privados del Apoyo de la Nueva República, los miembros de la Resistencia suelen ejercer tanto de pilotos como de mecánicos de transporte, poniendo en práctica sus habilidades y conocimientos técnicos en la lucha contra la Primera Orden.',
      },
      standard: true,
      epic: true,
      slots: ['Tech', 'Crew', 'Astromech', 'Astromech'],
      cost: 4,
      ffg: 572,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/005545edf9fc1c82464f52edad236b27.jpg',
      loadout: 6,
      extended: true,
    },
  ],
  ffg: 63,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Resistance_Transport.png',
};

export default t;

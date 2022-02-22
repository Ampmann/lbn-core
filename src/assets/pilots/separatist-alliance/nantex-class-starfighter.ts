import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Nantex-class Starfighter',
    de: 'Sternenjäger der Nantex-Klasse',
    fr: 'Chasseur de Classe Nantex',
    es: 'Caza estelar clase Nantex',
  },
  xws: 'nantexclassstarfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
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
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
  ],
  ability: {
    name: {
      en: 'Pinpoint Tractor Array',
      de: 'Fangstrahl-Zielsystem',
      fr: 'Dispositif Tracteur de Précision',
      es: 'Campos de tracción de alta precisión',
      it: 'Pinpoint Tractor Array',
      pl: 'Precyzyjna wiązka ściągająca',
      pt: 'Pinpoint Tractor Array',
      zh: 'Pinpoint Tractor Array',
    },
    text: {
      en:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      de:
        'Du kannst deinen [Single Turret Arc] nicht auf deinen [Rear Arc]rotieren. Nachdem du ein Manöver ausgeführt hast, darfst du 1 Fangstrahlmarker erhalten, um eine [Rotate Arc] -Aktion durchzuführen.',
      fr:
        'vous ne pouvez pas faire pivoter votre [Single Turret Arc] vers votre [Rear Arc]. Après avoir exécuté une manœuvre, vous pouvez gagner 1 marqueur de rayon tracteur pour effectuer une action [Rotate Arc].',
      es:
        'No puedes reorientar tu [Single Turret Arc] hacia tu [Rear Arc]. Después de que ejecutes una maniobra, puedes recibir 1 ficha de Campo de tracción para realizar una acción [Rotate Arc].',
      it:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      pl:
        'Nie możesz obracać swojego wskaźnika [Single Turret Arc] na twoją [Rear Arc]. Gdy wykonasz manewr, możesz otrzymać 1 żeton wiązki ściągającej, aby wykonać akcję [Rotate Arc].',
      pt:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      zh:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Stalgasin Hive Guard',
        de: 'Schwarmgarde der Stalgasin-Kolonie',
        fr: 'Garde de la Ruche Stalgasin',
        es: 'Guardia de la Colmena Stalgasin',
      },
      initiative: 3,
      limited: 0,
      xws: 'stalgasinhiveguard',
      standard: true,
      epic: true,
      text: {
        en:
          'Designed for the unique physiology of Geonosian pilots, Nantex-class starfighters are capable of maneuvers that would rip most ships—and pilots—apart.',
        de:
          'Speziell auf die physiologischen Besonderheiten der Geonosianer angepasst, kann der Sternenjäger der Nantex-Klasse Manöver fliegen, welche die meisten anderen Schiffe - und ihre Piloten - auseinanderreißen würden.',
        fr:
          'Conçu pour la physiologie spécifique des pilotes Géonosiens, les chasseurs de classe Nantex sont capables de manœuvres qui briseraient la plupart des vaisseaux et des pilotes.',
        es:
          'Diseñados para la particular fisiología de los pilotos geonosianos, los cazas estelares de clase Nantex son capaces de efectuar maniobras que harían pedazos a la mayoría de naves y pilotos.',
      },
      slots: ['Talent'],
      cost: 4,
      ffg: 609,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e97a0ae22847e0b71d920a0df9dfcfab.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/62c29b8b7f82e37980d58b39023a800a.jpg',
      loadout: 4,
      extended: true,
    },
    {
      name: { en: 'Sun Fac' },
      initiative: 6,
      limited: 1,
      xws: 'sunfac',
      ability: {
        en:
          'While you perform a primary attack, if the defender is tractored, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls der Verteidiger gefangen ist, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, si le défenseur est tracté, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si el defensor está atrapado en un campo de tracción, tiras 1 dado de ataque adicional.',
      },
      standard: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 6,
      ffg: 604,
      caption: {
        en: "Archduke's Enforcer",
        de: 'Vollstrecker des Erzherzogs',
        fr: "Homme de Main de l'Archiduc",
        es: 'Lugarteniente del Archiduque',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/42265df53c90026a58ac96b0acd3c1f8.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/ace32f2bdd974de54020be34bfb85a76.jpg',
      loadout: 18,
      extended: true,
    },
    {
      name: { en: 'Berwer Kret' },
      xws: 'berwerkret',
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you perform an attack that hits, each friendly ship with [Calculate] on its action bar and a lock on the defender may perform a red [Calculate] action.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, darf jedes befreundete Schiff mit [Calculate] in seiner Aktionsleiste, das den Verteidiger als Ziel erfasst hat, eine rote [Calculate] -Aktion durchführen.',
        fr:
          "Après que vous avez effectué une attaque qui touche, chaque vaisseau allié avec [Calculate] dans sa barre d'action et un verrouillage sur le défenseur peut effectuer une action [Calculate] rouge.",
        es:
          'Después de que efectúes un ataque que impacte, toda nave aliada con [Calculate] en su barra de acciones y un Blanco fijado sobre el defensor puede realizar una acción [Calculate] roja.',
      },
      standard: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 4,
      ffg: 605,
      caption: {
        en: 'Hive Guard Captain',
        de: 'Captain der Schwarmgarde',
        fr: 'Capitaine de la Garde de la Ruche',
        es: 'Capitán de la guardia de la colmena',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f1c76ce6ff266c23099686392efef565.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/8466283eeb7d476744913f5d9d69e745.jpg',
      loadout: 7,
      extended: true,
    },
    {
      name: { en: 'Chertek' },
      xws: 'chertek',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform a primary attack, if the defender is tractored, you may reroll up to 2 attack dice.',
        de:
          'Solange du einen Primärangriff durchführst, falls der Verteidiger gefangen ist, darfst du bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, si le défenseur est tracté, vous pouvez relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras efectúas un ataque principal, si el defensor está atrapado en un campo de tracción, puedes volver a tirar hasta 2 dados de ataque.',
      },
      standard: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 5,
      ffg: 606,
      caption: {
        en: 'Opportunistic Ace',
        de: 'Opportunistisches Fliegerass',
        fr: 'As Opportuniste',
        es: 'As oportunista',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/07504533be45d13cb82d71ea11d234f7.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/fc7fff6c1e6eb73ff6ae10768f5491a7.jpg',
      loadout: 15,
      extended: true,
    },
    {
      name: { en: 'Gorgol' },
      xws: 'gorgol',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'During the System Phase, you may gain 1 disarm token and choose a friendly ship at range 1-2. If you do, it gains 1 tractor token, then repairs 1 of its faceup Ship trait damage cards.',
        de:
          'Während der Systemphase darfst du 1 Entwaffnet-Marker erhalten und ein befreundetes Schiff in Reichweite 1-2 wählen. Falls du das tust, erhält es 1 Fangstrahlmarker, dann repariert es 1 seiner offenen Schiff -Schadenskarten.',
        fr:
          'Pendant la phase de système, vous pouvez gagner 1 marqueur de désarmement et choisir un vaisseau allié à porté 1-2. Dans ce cas, il gagne 1 marqueur de rayon tracteur, puis il répare 1 de ses cartes de dégât face visible Vaisseau.',
        es:
          'Durante la fase de Sistemas, puedes recibir 1 ficha de Desarme y elegir una nave aliada que tengas a alcance 1-2. Si lo haces, esa nave recibe 1 ficha de Campo de tracción, y luego repara 1 de de sus cartas de Daño con el atributo Nave .',
      },
      standard: true,
      epic: true,
      slots: ['Talent', 'Modification'],
      cost: 4,
      ffg: 607,
      caption: {
        en: 'Handy Engineer',
        de: 'Geschickter Ingenieur',
        fr: 'Ingénieur Habile',
        es: 'Ingeniero mañoso',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d2d0764f83a2740f407082e934986ff2.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/8749f3b0f17a7c517e8633cc2558792f.jpg',
      loadout: 9,
      extended: true,
    },
    {
      name: {
        en: 'Petranaki Arena Ace',
        de: 'Ass der Petranaki-Arena',
        fr: "As de l'Arène Petranaki",
        es: 'As del coliseo Petranaki',
      },
      cost: 4,
      ffg: 608,
      initiative: 4,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/5c32b5d481ad922be7a0ec4a3743d1d6.jpg',
      text: {
        en:
          'The Petranaki Arena is a massive edifice on Geonosis that was a key site in the first battle of the Clone Wars.',
        de:
          'Die Petranaki-Arena ist ein gewaltiges Bauwerk auf dem Planeten Geonosis und der Ort, an dem die erste Schlacht der Klonkriege geschlagen wurde.',
        fr:
          "L'Arène de Petranaki est un gigantesque édifice de Géonosis qui a été le lieu principal de la première bataille de la Guerre des Clones.",
        es:
          'El coliseo Petranaki es un edificio gigantesco de Geonosis que fue un lugar clave en la primera batalla de las Guerras Clon.',
      },
      standard: true,
      epic: true,
      limited: 0,
      slots: ['Talent', 'Talent'],
      xws: 'petranakiarenaace',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d2d62b6070fdf59b58db79aadb845d54.png',
      },
      loadout: 6,
      extended: true,
    },
  ],
  ffg: 67,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Nantex_Class_Starfighter.png',
};

export default t;

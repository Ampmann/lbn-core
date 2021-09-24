import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'ablativeplating',
    sides: [
      {
        title: {
          en: 'Ablative Plating',
          de: 'Ablative Panzerung',
          fr: 'Blindage Ablatif',
          es: 'Blindaje ablativo',
        },
        type: 'Modification',
        ability: {
          en:
            'Before you would suffer damage from an obstacle or from a friendly bomb detonating, you may spend 1 [Charge]. If you do, prevent 1 damage.',
          de:
            'Bevor du Schaden durch ein Hindernis oder die Detonation einer befreundeten Bombe erleiden würdest, darfst du 1 [Charge] ausgeben. Falls du das tust, verhindere 1 Schaden.',
          es:
            'Antes de que vayas a sufrir daño causado por un obstáculo o por la detonación de una bomba aliada, puedes gastar 1 [Charge]. Si lo haces, evitas sufrir 1 de ese daño.',
          fr:
            "Avant de subir des dégâts à cause d'un obstacle ou de l'explosion d'une bombe alliée, vous pouvez dépenser 1 [Charge]. Dans ce cas, prévenez 1 dégât.",
        },
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_68.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_68.jpg',
        ffg: 292,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'advancedslam',
    sides: [
      {
        title: {
          en: 'Advanced SLAM',
          de: 'Verbesserter SLAM',
          fr: 'MASL Avancé',
          es: 'Motor sublumínico avanzado',
        },
        type: 'Modification',
        ability: {
          en:
            'After you perform a [SLAM] action, if you fully executed the maneuver, you may perform a white action on your action bar, treating that action as red.',
          de:
            'Nachdem du eine [Slam]-Aktion durchgeführt hast, falls du das Manöver vollständig ausgeführt hast, darfst du eine weiße Aktion aus deiner Aktionsleiste durchführen, wobei du jene Aktion behandelst, als wäre sie rot.',
          es:
            'Después de que efectúes una acción [Slam], si has ejecutado completamente la maniobra, puedes realizar una acción blanca que figure en tu barra de acciones, considerando esa acción como si fuera roja.',
          fr:
            "Après avoir effectué une action [Slam], si vous avez entièrement exécuté la manœuvre, vous pouvez effectuer une action blanche de votre barre d'action, en la considérant comme rouge.",
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_69.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_69.jpg',
        ffg: 293,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'SLAM', difficulty: 'White' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'afterburners',
    sides: [
      {
        title: {
          en: 'Afterburners',
          de: 'Nachbrenner',
          fr: 'Postcombustion',
          es: 'Postquemadores',
        },
        type: 'Modification',
        ability: {
          en:
            'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [Boost] action, even while stressed.',
          de:
            'Nachdem du ein Manöver mit Geschwindigkeit 3-5 vollständig ausgeführt hast, darfst du 1 [Charge] ausgeben, um eine [Boost]-Aktion durchzuführen, auch solange du gestresst bist.',
          es:
            'Después de que ejecutes completamente una maniobra de velocidad 3-5, puedes gastar 1 [Charge] para realizar una acción [Boost], incluso mientras estás bajo tensión.',
          fr:
            'Après avoir entièrement exécuté une manœuvre à vitesse 3-5, vous pouvez dépenser 1 [Charge] pour effectuer une action [Boost], même tant que vous êtes stressé.',
        },
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_70.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_70.jpg',
        ffg: 294,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 4, '4': 5, '5': 6, '6': 7 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'electronicbaffle',
    sides: [
      {
        title: {
          en: 'Electronic Baffle',
          de: 'Elektronischer Dämpfer',
          fr: 'Déflecteur Électronique',
          es: 'Regulador electrónico',
        },
        type: 'Modification',
        ability: {
          en:
            'During the End Phase, you may suffer 1 [Hit] damage to remove 1 red token.',
          de:
            'Während der Endphase darfst du 1 [Hit]-Schaden erleiden, um 1 roten Marker zu entfernen.',
          es:
            'Durante la fase Final, puedes sufrir 1 de daño [Hit] para retirar 1 ficha roja.',
          fr:
            'Pendant la phase de dénouement, vous pouvez subir 1 dégât [Hit] pour retirer 1 marqueur rouge.',
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_71.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_71.jpg',
        ffg: 295,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'engineupgrade',
    sides: [
      {
        title: {
          en: 'Engine Upgrade',
          de: 'Verbessertes Triebwerk',
          fr: 'Moteurs Améliorés',
          es: 'Motor mejorado',
        },
        type: 'Modification',
        text: {
          en:
            'Large military forces such as the Galactic Empire have standardized engines, but individual pilots and small organizations often replace the power couplings, add thrusters, or use high-performance fuel to get extra push out of their engines.',
          de:
            'Große Armeen wie das Militär des Galaktischen Imperiums haben meist standardisierte Triebwerke. Freischaffende Piloten und kleinere Organisationen ersetzen oft Energiekopplungen,',
          fr:
            "Les armées de grande taille comme celles de l'Empire Galactique ont des vaisseaux équipés de moteurs standardisés, mais les pilotes indépendants ou les petites organisations remplacent souvent les accouplements, rajoutent des propulseurs ou utilisent du carburant haute performance afin d'obtenir une poussée plus forte.",
          es:
            'Las grandes fuerzas militares como las del Imperio Galáctico utilizan componentes de motores estandarizados, pero los pilotos individuales y las organizaciones pequeñas suelen reemplazar los acoplamientos de energía, añadir propulsores o emplear combustible de alto rendimiento para aumentar las prestaciones de sus motores.',
        },
        slots: ['Modification'],
        actions: [{ type: 'Boost', difficulty: 'White' }],
        grants: [{ action: { type: 'Boost', difficulty: 'White' }, value: 1 }],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_72.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_72.jpg',
        ffg: 296,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 4, Large: 7, Huge: 10 },
    },
    restrictions: [{ action: { type: 'Boost', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'hullupgrade',
    sides: [
      {
        title: {
          en: 'Hull Upgrade',
          de: 'Verstärkte Hülle',
          fr: 'Coque Améliorée',
          es: 'Blindaje mejorado',
        },
        type: 'Modification',
        text: {
          en:
            'For those who cannot afford an enhanced shield generator, bolting additional plates onto the hull of a ship can serve as an adequate substitute.',
          de:
            'Auch wer sich keinen verbesserten Schildgenerator leisten kann, muss nicht auf erhöhten Schutz verzichten, sondern kann sich mit zusätzlichen Panzerplatten an der Schiffshülle behelfen.',
          fr:
            "Quand on ne peut pas s'offrir un générateur de boucliers améliorés, souder des plaques de blindage sur la coque du vaisseau peut être un bon substitut.",
          es:
            'Para quienes no pueden permitirse instalar un generador de escudos más potente, añadir capas adicionales de blindaje al casco de una nave puede servirles de alternativa adecuada.',
        },
        slots: ['Modification'],
        grants: [{ stat: 'hull', value: 1 }],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_73.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_73.jpg',
        ffg: 297,
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 3, '2': 5, '3': 7 } },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'munitionsfailsafe',
    sides: [
      {
        title: {
          en: 'Munitions Failsafe',
          de: 'Ausfallsichere Munition',
          fr: 'Munitions à Sûreté Intégrée',
          es: 'Munición a prueba de fallos',
        },
        type: 'Modification',
        ability: {
          en:
            'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
          de:
            'Solange du einen [Torpedo]- oder [Missile]-Angriff durchführst, nachdem du die Angriffswürfel geworfen hast, darfst du alle Würfelergebnisse negieren, um 1 [Charge] wiederherzustellen, die du als Kosten für den Angriff ausgegeben hast.',
          es:
            'Mientras efectúas un ataque [Torpedo] o [Missile], después de tirar los dados de ataque, puedes anular todos los resultados de los dados para recuperar 1 [Charge] que hayas gastado como coste para el ataque.',
          fr:
            "Tant que vous effectuez une attaque [Torpedo] ou [Missile], après avoir lancé les dés d'attaque, vous pouvez annuler tous les résultats des dés pour récupérer 1 [Charge] que vous avez dépensée comme coût pour l'attaque.",
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_74.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_74.jpg',
        ffg: 298,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'shieldupgrade',
    sides: [
      {
        title: {
          en: 'Shield Upgrade',
          de: 'Verbesserte Schilde',
          fr: 'Boucliers Améliorés',
          es: 'Escudos mejorados',
        },
        type: 'Modification',
        text: {
          en:
            "Deflector shields are a substantial line of defense on most starships beyond the lightest fighters. While enhancing a ship's shield capacity can be costly, all but the most confident or reckless pilots see the value in this sort of investment.",
          de:
            'Deflektor­schilde sind der wichtigste Verteidigungsmechanismus der meisten Raumschiffe, abgesehen von extrem leichten Jägern. Eine Verbesserung der Schildkapazität ist eine kostspielige, aber durchaus',
          fr:
            "Les écrans déflecteurs sont la principale protection de la plupart des vaisseaux, à l'exception des chasseurs légers. Améliorer les boucliers d'un vaisseau peut se révéler coûteux, mais seuls les pilotes les plus présomptueux, ou les plus téméraires, songent à se passer de ce type d'investissement.",
          es:
            'Los escudos deflectores son una importantísima línea de defensa de prácticamente todas las astronaves a excepción de los cazas más ligeros. Aunque mejorar los escudos de una nave puede ser caro, sólo los pilotos más confiados o temerarios desdeñan este tipo de inversión.',
        },
        slots: ['Modification'],
        grants: [{ stat: 'shields', value: 1 }],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_75.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_75.jpg',
        ffg: 299,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'staticdischargevanes',
    sides: [
      {
        title: {
          en: 'Static Discharge Vanes',
          de: 'Elektrostatischer Entlader',
          fr: 'Ailettes Statiques de Décharge',
          es: 'Aparejos de descarga electrostática',
        },
        type: 'Modification',
        ability: {
          en:
            'Before you would gain 1 ion or jam token, if you are not stressed, you may choose another ship at range 0-1 and gain 1 stress token. If you do, the chosen ship gains that ion or jam token instead, then you suffer 1 [Hit] damage.',
          de:
            'Falls du einen Ionen- oder Störsignal-marker erhalten würdest, darfst du ein Schiff in Reichweite 0-1 wählen. Falls du das tust, erhalte 1 Stressmarker und transferiere 1 Ionen- oder Störsignalmarker auf jenes Schiff.',
          es:
            'Antes de que vayas de recibir una ficha de Iones o Interferencia, si no estás bajo tensión, puedes elegir otra nave que tengas a alcance 0─1 y recibir 1 ficha de Tensión. Si lo haces, la nave que has elegido recibe esa ficha de Iones o Interferencia en tu lugar.',
          fr:
            'Si vous devez gagner un marqueur ionique ou de brouillage, vous pouvez choisir un vaisseau à portée 0-1. Dans ce cas, gagnez 1 marqueur de stress et transférez 1 marqueur ionique ou de brouillage à ce vaisseau.',
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/9c42b09b923d60ac8504e52bd0cbaf25.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_76.jpg',
        ffg: 300,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'stealthdevice',
    sides: [
      {
        title: {
          en: 'Stealth Device',
          de: 'Tarnvorrichtung',
          fr: "Système d'Occultation",
          es: 'Dispositivo de sigilo',
        },
        type: 'Modification',
        ability: {
          en:
            'While you defend, if your [Charge] is active, roll 1 additional defense die. After you suffer damage, lose 1 [Charge].',
          de:
            'Solange du verteidigst, falls deine [Charge] aktiv ist, wirf 1 zusätzlichen Verteidigungswürfel. Nachdem du Schaden erlitten hast, verliere 1 [Charge].',
          es:
            'Mientras te defiendes, si tu [Charge] está activa, tira 1 dado de defensa adicional. Después de que sufras daño, pierdes 1 [Charge].',
          fr:
            'Tant que vous défendez, si votre [Charge] est active, lancez 1 dé de défense supplémentaire. Après avoir subi des dégâts, perdez 1 [Charge].',
        },
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_77.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_77.jpg',
        ffg: 301,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tacticalscrambler',
    sides: [
      {
        title: {
          en: 'Tactical Scrambler',
          de: 'Taktischer Scrambler',
          fr: 'Brouilleur Tactique',
          es: 'Inhibidor táctico',
        },
        type: 'Modification',
        ability: {
          en:
            "While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die.",
          de:
            'Solange du den Angriff eines feindlichen Schiffes versperrst, wirft der Verteidiger 1 zusätzlichen Verteidigungswürfel.',
          es:
            'Mientras obstruyes el ataque de una nave enemiga, el defensor tira 1 dado de defensa adicional.',
          fr:
            "Tant que vous gênez l'attaque d'un vaisseau ennemi, le défenseur lance 1 dé de défense supplémentaire.",
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_78.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_78.jpg',
        ffg: 302,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'imperviumplating',
    sides: [
      {
        title: {
          en: 'Impervium Plating',
          de: 'Impervium-Panzerung',
          fr: 'Blindage en Impervium',
          es: 'Blindaje de impenetranio',
        },
        type: 'Modification',
        ability: {
          en:
            'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
          de:
            'Bevor dir eine offene Schiff-Schadenskarte zugeteilt werden würde, darfst du 1 [Charge] ausgeben, um sie stattdessen abzulegen.',
          es:
            'Antes de que vayas a recibir una carta de Daño Nave boca arriba, puedes gastar 1 [Charge] para descartarla en vez de recibirla.',
          fr:
            "Avant qu'une carte de dégât face visible Vaisseau ne vous soit attribuée, vous pouvez dépenser 1 [Charge] pour la défausser à la place.",
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/93e0fe1b2931944d128126b854c4ad33.png',
        },
        ffg: 534,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/20769de45863e2bbb180f05e6ed1e0e3.jpg',
      },
    ],
    restrictions: [{ chassis: ['belbullab22starfighter'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
  },
  {
    xws: 'synchronizedconsole',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Synchronized Console',
          de: 'Synchronisierte Steuerkonsole',
          fr: 'Console Synchronisée',
          es: 'Panel de mandos sincronizado',
        },
        type: 'Modification',
        ability: {
          en:
            'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, darfst du ein befreundetes Schiff in Reichweite 1 oder ein befreundetes Schiff mit der Aufwertung Synchronisierte Steuerkonsole in Reichweite 1-3 wählen und eine Zielerfassung ausgeben, die du auf dem Verteidiger hast. Falls du das tust, darf das von dir gewählte Schiff den Verteidiger als Ziel erfassen.',
          es:
            'Después de que efectúes un ataque, puedes elegir una nave aliada que tengas a alcance 1 o una nave aliada con la mejora Panel de mandos sincronizado que tengas a alcance 1-3 y gastar un Blanco fijado que tengas sobre el defensor. Si lo haces, la nave aliada que elegiste puede obtener un Blanco fijado sobre el defensor.',
          fr:
            "Après avoir effectué une attaque, vous pouvez choisir un vaisseau allié à portée 1 ou un vaisseau allié qui possède l'amélioration Console Synchronisée à portée 1-3 et dépenser un verrouillage que vous avez sur le défenseur. Dans ce cas, le vaisseau allié que vous avez choisi peut verrouiller le défenseur.",
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3e5bd38f39f904fbaaa75293e56fb38.png',
        },
        ffg: 554,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/f105bb42b6d3500c300e48ab695c1647.jpg',
      },
    ],
    restrictions: [
      { factions: ['Galactic Republic'] },
      { action: { type: 'Lock', difficulty: 'White' } },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 0,
    xws: 'sparepartscanisters',
    sides: [
      {
        title: {
          en: 'Spare Parts Canisters',
          de: '[Astromech] Ersatzteilkanister',
          fr: 'Caisses de Pièces Détachées',
          es: 'Contenedores de recambios',
        },
        type: 'Modification',
        ability: {
          en:
            'Action: Spend 1 [Charge] to recover 1 charge on one of your equipped [Astromech] upgrades. Action: Spend 1 [Charge] to drop 1 spare parts, then break all locks assigned to you.',
          de:
            'Aktion: Gib 1 [Charge] aus, um 1 Ladung von 1 deiner ausgerüsteten [Astromech]-Aufwertungen wiederherzustellen. Aktion: Gib 1 [Charge] aus, um 1 Ersatzteil abzuwerfen, dann verliere alle Zielerfassungen, die dir zugeordnet sind.',
          es:
            'Acción: Gasta 1 [Charge] para recuperar 1 carga sobre una de tus mejoras [Astromech] equipadas. Acción: Gasta 1 [Charge] para soltar 1 ficha de Piezas de recambio y luego interrumpe todos los Blancos fijados asignados a ti.',
          fr:
            "Action : dépensez 1 [Charge] pour récupérer 1 charge sur l'une de vos améliorations [Astromech] équipées. Action : dépensez 1 [Charge] pour larguer 1 pièces détachées, puis rompez tous les verrouillages qui vous sont assignés.",
        },
        charges: { value: 1, recovers: 0 },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/79d9f2b2bc32bd78ab67dc82eece696a.png',
        },
        ffg: 550,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a61b812e2e74fab5435c9684462cd9d7.jpg',
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 3 },
    restrictions: [{ equipped: ['Astromech'] }],
  },
  {
    limited: 0,
    xws: 'delayedfuses',
    sides: [
      {
        title: {
          en: 'Delayed Fuses',
          de: 'Zeitverzögerter Zünder',
          fr: 'Détonateur à Retardement',
          es: 'Espoletas retardadas',
        },
        type: 'Modification',
        ability: {
          en:
            'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
          de:
            'Nachdem du eine Bombe oder Mine abgeworfen, gestartet oder platziert hast, darfst du 1 Zeitzünder auf jenem Gerät platzieren.',
          es:
            'Después de que sueltes, lances o coloques una bomba o mina, puedes colocar 1 indicador de Espoleta sobre ese dispositivo.',
          fr:
            "Après avoir largué, lancé ou placé une bombe ou une mine, vous pouvez placer dessus 1 marqueur d'amorce.",
        },
        slots: ['Modification'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/4572ece39224eeaf2dfce2770b96f919.png',
        },
        ffg: 592,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/453d2de1f5059d0e6eb7884a4bf7986b.jpg',
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 0,
    xws: 'angleddeflectors',
    sides: [
      {
        text: {
          en:
            "Starfighter shields often have manual overrides that allow them to be angled for increased front or rear protection. However, doing so leaves the ship exposed if the pilot's situational awareness falters.",
          de:
            'Sternenjägerschilde haben oft manuelle Überbrückungsschalter, mit denen die Energie in bestimmte Richtungen umgeleitet werden kann, um Front oder Heck besser zu schützen. Ein Pilot, der seine Situation nicht richtig überblickt, kann jedoch seinem Feind eine offene Flanke bieten.',
          fr:
            "Les boucliers des chasseurs bénéficient souvent d'un contrôle manuel qui permet de les réorienter pour augmenter la protection avant ou arrière. Cependant, en agissant ainsi le vaisseau est exposé si la vigilance du pilote faiblit.",
          es:
            'Los escudos de los cazas estelares suelen tener controles manuales que permiten reajustarlos para aumentar la protección frontal o posterior,. Sin embargo, hacer esto deja la nave expuesta si el piloto no es perfectamente consciente de lo que ocurre a su alrededor.',
        },
        title: {
          en: 'Angled Deflectors',
          de: 'Ausgerichtete Deflektoren',
          fr: 'Déflecteurs Orientables',
          es: 'Deflectores reajustados',
        },
        type: 'Modification',
        slots: ['Modification'],
        grants: [
          { stat: 'shields', value: -1 },
          { action: { type: 'Reinforce', difficulty: 'White' }, value: 1 },
        ],
        ffg: 593,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/691b45548136b6e5fd005e7797ae53d9.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/41cf9c90abcd8ff5c668bb447967b75c.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    cost: { variable: 'agility', values: { '0': 6, '1': 3, '2': 1, '3': 1 } },
  },
  {
    limited: 0,
    xws: 'targetingcomputer',
    sides: [
      {
        ffg: 619,
        title: {
          en: 'Targeting Computer',
          de: 'Zielcomputer',
          fr: 'Ordinateur de Visée',
          es: 'Computadora de selección de blancos',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/2e8e6572a5802967220296ec22e5d8cb.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/619d3d56eadaada29c6602cc7cd00148.png',
        },
        text: {
          en:
            'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
          de:
            'Zielcomputer gehören zur Standardausstattung vieler Schiffe, vor allem wenn sie für den Abwurf von Sprengkörpern konzipiert sind. Bei leichten Jagdmaschinen und Transportern, die ohne Waffenzielsystem verkauft werden, lässt es sich problemlos nachrüsten.',
          fr:
            "Les ordinateurs de visée sont des dispositifs standards sur beaucoup de vaisseaux et plus spécifiquement sur ceux conçus pour utiliser de l'artillerie. Certains chasseurs légers et appareils de transport n'ont pas ce genre de guidage d'armes, mais il est toujours possible d'en installer en tant que modification.",
          es:
            'Las computadoras de selección de blancos son componentes habituales en muchas naves, sobre todo en aquellas diseñadas para disparar cabezas explosivas. Algunos cazas estelares y transportes pequeños carecen de estos sistemas de guiado de armas, aunque eso no impide instalárselos como una modificación ulterior.',
        },
        slots: ['Modification'],
        type: 'Modification',
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 3 },
  },
  {
    xws: 'overdrivethruster',
    limited: 1,
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
    },
    sides: [
      {
        ability: {
          en:
            'While you perform a red [Boost], [Barrel Roll], or [SLAM] action, you must use a template of 1 speed higher, if able.',
          de:
            'Solange du eine rote [Boost]-, [Barrel Roll]- oder [Slam]-Aktion durchführst, musst du eine Schablone mit einer um 1 höheren Geschwindigkeit verwenden, falls möglich.',
          es:
            'Mientras efectúas una acción [Boost], [Barrel Roll] o [Slam] roja, debes utilizar una plantilla cuya velocidad sea superior en 1 punto a la original, si es posible.',
          fr:
            'Tant que vous effectuez une action rouge [Boost], [Barrel Roll] ou [Slam], vous devez utiliser un gabarit de 1 vitesse supérieure, si possible.',
        },
        title: {
          en: 'Overdrive Thruster',
          de: 'Übersteuerte Schubdüsen',
          es: 'Propulsor de refuerzo',
          fr: 'Surcharge des Propulseurs',
        },
        type: 'Modification',
        slots: ['Modification'],
        ffg: 721,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/fb6fef19ae0bf5b42d4da716f4826c26.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'independentcalculations',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'Replace your Networked Calculations ship ability with the following: Independent Calculations: While you perform a white [Calculate] action, you may treat it as red to gain 1 additional calculate token. Other ships cannot spend your calculate tokens using the Networked Calculations ship ability.',
          de:
            'Ersetze deine Schiffsfähigkeit Vernetzte Berechnungssysteme durch: Autonome Berechnungssysteme: Solange du eine weiße [Calculate]-Aktion durchführst, darfst du sie behandeln, als wäre sie rot, um 1 zusätzlichen Berechnungsmarker zu erhalten. Andere Schiffe können deine Berechnungsmarker nicht unter Verwendung der Schiffsfähigkeit Vernetzte Berechnungssysteme ausgeben.',
          es:
            'Reemplaza tu capacidad de nave Procesado de cálculos en red por la siguiente: Cálculos independientes: Mientras realizas una acción [Calculate] blanca, puedes considerarla como si fuera roja para recibir 1 ficha de Cálculos adicional. Las otras naves son incapaces de gastar tus fichas de Cálculos mediante la capacidad de nave Procesado de cálculos en red.',
          fr:
            'Remplacez votre capacité de vaisseau Calculs en Réseau par la suivante : Calculs Indépendants : tant que vous effectuez une action blanche [Calculate], vous pouvez la considérer comme rouge pour gagner 1 marqueur de calcul supplémentaire. Les autres vaisseaux ne peuvent pas dépenser vos marqueurs de calcul en utilisant la capacité de vaisseau Calculs en Réseau.',
        },
        title: {
          en: 'Independent Calculations',
          de: 'Autonome Berechnungssysteme',
          es: 'Cálculos independientes',
          fr: 'Calculs Indépendants',
        },
        type: 'Modification',
        slots: ['Modification'],
        ffg: 866,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/327275e06ddaac1afbe7b8209883aa4b.jpg',
      },
    ],
    standarized: true,
    restrictions: [{}, {}],
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'precisionionengines',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            "Before you execute a speed 1-3 Koiogran Turn ([Koiogran Turn]) maneuver, you may spend 1 [Charge] to execute that maneuver as a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver instead.",
          de:
            "Bevor du eine Koiogran-­Wende ([Koiogran Turn]) mit Geschwindigkeit 1-3 ausführst, darfst du 1 [Charge] ausgeben, um jenes Manöver stattdessen als Segnor-Looping ([Segnor's Loop Left] oder [Segnor's Loop Right]) auszuführen.",
          es:
            "Antes de que ejecutes una maniobra de giro koiograno ([Koiogran Turn]) de velocidad 1-3, puedes gastar 1 [Charge] para en vez de eso ejecutar esa maniobra como un giro de Segnor ([Segnor's Loop Left] o [Segnor's Loop Right]).",
          fr:
            "Avant d'exécuter une manœuvre de Virage Koiogran ([Koiogran Turn]) à vitesse 1-3, vous pouvez dépenser 1 [Charge] pour exécuter cette manœuvre en tant que Boucle de Segnor ([Segnor's Loop Left] ou [Segnor's Loop Right]) à la place.",
        },
        title: {
          en: 'Precision Ion Engines',
          de: 'Präzisions-Ionenantrieb',
          es: 'Motores iónicos de precisión',
          fr: 'Moteurs Ioniques de Précision',
        },
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        ffg: 867,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/fbafd721fa85216ee1d16d305e31e694.jpg',
      },
    ],
    cost: { value: 2 },
  },
];

export default t;

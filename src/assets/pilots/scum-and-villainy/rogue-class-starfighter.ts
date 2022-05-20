import { ShipType } from "../../../types";

const t: ShipType = {
    "name": "Rogue-class Starfighter",
    "xws": "rogueclassstarfighter",
    "size": "Small",
    "dial": [
        "1TW",
        "1BB",
        "1NB",
        "1YW",
        "2ER",
        "2TW",
        "2BB",
        "2FB",
        "2NB",
        "2YW",
        "2RR",
        "3TR",
        "3BW",
        "3FB",
        "3NW",
        "3YR",
        "4FB",
        "5FW",
        "5KR"
    ],
    "faction": "Scum and Villainy",
    "stats": [
        { "arc": "Front Arc", "type": "attack", "value": 2 },
        { "type": "agility", "value": 2 },
        { "type": "hull", "value": 5 },
        { "type": "shields", "value": 2 }
    ],
    "actions": [
        {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Boost" },
            "type": "Focus"
        },
        {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Barrel Roll" },
            "type": "Focus"
        },
        {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Barrel Roll" },
            "type": "Evade"
        },
        { "difficulty": "White", "type": "Lock" },
        { "difficulty": "Red", "type": "Boost" }
    ],
    "ability": {
        "name": "Dead to Rights",
        "text": "While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens."
    },
    "pilots": [
        {
            "name": "Cad Bane",
            "caption": "Infamous Bounty Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "cadbane",
            "slots": ["Title"],
            "ability": "After you perform an attack that hits, you may spend 2 [Charge] to transfer 1 of your non-lock red or orange tokens to the defender.",
            "charges": { "value": 2, "recovers": 1 }, "keywords": ["Bounty Hunter"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "Viktor Hel",
            "caption": "Storied Bounty Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "viktorhel-rogueclassstarfighter",
            "slots": [],
            "ability": "After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.", "keywords": ["Bounty Hunter"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "Nom Lumb",
            "caption": "Laughing Bandit",
            "initiative": 1,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "nomlumb-rogueclassstarfighter",
            "slots": [],
            "ability": "At the start of the Engagement Phase, you may choose 1 enemy ship in your [Front Arc]. If you do, treat your initiative as equal to that ship's until the end of the round.", "keywords": [],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "Outer Rim Hunter",
            "caption": "",
            "initiative": 3,
            "limited": 0,
            "cost": 0,
            "loadout": 0,
            "xws": "outerrimhunter",
            "slots": [],
            "text": "Due to its association with Cad Bane, the Rogue-class Starfighterhas found its way into the hands of other bounty hunters, especially those who operate in the lawless Outer Rim.",
            "keywords": ["Bounty Hunter"],
            "standard": true,
            "extended": true,
            "epic": true
        }
    ]
}

export default t
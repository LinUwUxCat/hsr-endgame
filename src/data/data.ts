import { date } from "../utils/date";
import { monsters } from "./monsters";
import type { MemoryOfChaos, Monster } from "./types";

const memoryOfChaos : MemoryOfChaos[] = [
    {
        name: "Breached Nest",
        dateStart: date("19/01/2026"),
        dateEnd: date("02/03/2026"),
        node1: {
            wave1: [
                {id: "4033030", hp: 20944947, toughness: 160},
                {id: "8003010", hp: 1396631, toughness: 100}
            ],
            wave2: [
                {id: "100401014", hp: 4748546, hpPercent: 777, weakness: ["FIRE", "LIGHTNING", "QUANTUM"], toughness: 140},
                {id: "100403002", hp:2374273, hpPercent: 567, weakness: ["PHYSICAL", "FIRE", "IMAGINARY"], toughness: 80}
            ]
        },
        node2: {
            wave1: [
                {id: "4053010", hp: 20944947, toughness: 180},
                {id: "4063010", hp: 2234610, toughness: 160}
            ],
            wave2: [
                {id: "3024030", hp: 11173050, toughness: 200},
            ]
        },
        turbulence: `At the start of each wave, recovers 4 Skill Point(s) for allies. When ally targets use Skills or consume Skill Points, add 1 hits to "Memory Turbulence," stacking up to 15 hit(s). At the start of each Cycle, each hit of "Memory Turbulence" deals True DMG once to a random enemy target.`
    },
    {
        name: "Monkey Business",
        dateStart: date("08/12/2025"),
        dateEnd: date("19/01/2026"),
        node1: {
            wave1: [
                {id: "2023030", hp: 1536294, toughness: 140},
                {id: "4053020", hp: 20944947, toughness: 160}
            ],
            wave2: [
                {id: "302402009", hp: 11173050, hpPercent: 640, toughness: 200},
            ]
        },
        node2: {
            wave1: [
                {id: "402301001", hp: 2513936, hpPercent: 554, toughness: 160},
                {id: "4063010", hp: 2234610, toughness: 160}
            ],
            wave2: [
                {id: "2034010", hp: 3840736, hpBarCount: 2, toughness: 240},
            ]
        },
        turbulence: `When an ally target attacks an Elite or Boss enemy with a corresponding Type weakness, add 1 Hits Per Action to "Memory Turbulence". Breaking an Elite or Boss enemy's weakness adds an additional 1 Hits Per Action, stacking up to 10 hits. At the start of each Cycle, each hit of "Memory Turbulence" deals 1 instance of True DMG to a random enemy target.`
    }, 
    {
        name: "Category Mistake",
        dateStart: date("27/10/2025"),
        dateEnd: date("08/12/2025"),
        node1: {
            wave1: [
                {id: "4013010", hp: 2011149, toughness: 160},
                {id: "2023030", hp: 1229035, toughness: 140}
            ],
            wave2: [
                {id: "4034010", hp: 3631241, hpBarCount: 2, toughness: 240},
            ]
        },
        node2: {
            wave1: [
                {id: "3003020", hp: 2011149, toughness: 100},
                {id: "2013020", hp: 1340766, toughness: 100}
            ],
            wave2: [
                {id: "4064010", hp: 3016723, hpBarCount: 2, toughness: 120, toughnessBarCount: 4},
            ]
        },
    }
]

function getMonsterFull(m : Monster) : Monster{
    return {...monsters[m.id!], ...m}
}

export { memoryOfChaos, getMonsterFull }
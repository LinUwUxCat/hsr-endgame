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
                {id: "4033030", hp: 2094947, toughness: 160},
                {id: "8003010", hp: 1396631, toughness: 100}
            ],
            wave2: [
                {id: "1004010", hp: 4748546, hpPercent: 777, weakness: ["FIRE", "LIGHTNING", "QUANTUM"], toughness: 140},
                {id: "1004030", hp:2374273, hpPercent: 567, weakness: ["PHYSICAL", "FIRE", "IMAGINARY"], toughness: 80}
            ]
        },
        node2: {
            wave1: [
                {id: "4053010", hp: 2094947, toughness: 180},
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
                {id: "4053020", hp: 2094947, toughness: 160}
            ],
            wave2: [
                {id: "3024020", hp: 11173050, hpPercent: 640, toughness: 200},
            ]
        },
        node2: {
            wave1: [
                {id: "4023010", hp: 2513936, hpPercent: 554, toughness: 160},
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
    },
    {
        name: "Pillar of Genesis",
        dateStart: date("15/09/2025"),
        dateEnd: date("27/10/2025"),
        node1: {
            wave1: [
                {id: "4053010", hp: 1466463, toughness: 180},
                {id: "4033020", hp: 1759755, toughness: 160}
            ],
            wave2: [
                {id: "4053010", hp: 1466463, toughness: 180},
                {id: "1004020", hp: 2346340, hpPercent: 611, toughness: 140},
            ]
        },
        node2: {
            wave1: [
                {id: "2023010", hp: 1173170, toughness: 120},
                {id: "2023020", hp: 1173170, toughness: 120}
            ],
            wave2: [
                {id: "4044010", hp: 11731702, toughness: 200},
            ]
        },
    },
    {
        "name": "Gambler's Plight",
        "dateStart": date("04/08/2025"),
        "dateEnd": date("15/09/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "2033010",
                    "hp": 1340766,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2013010",
                    "hp": 1117305,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "1014010",
                    "hp": 3687106,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2033010",
                    "hp": 1340766,
                    "toughness": 120,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "4033010",
                    "hp": 1270934,
                    "toughness": 160,
                    "speed": 158
                },
                {
                    "id": "4033020",
                    "hp": 1634059,
                    "toughness": 160,
                    "speed": 174
                }
            ],
            "wave2": [
                {
                    "id": "8034010",
                    "hp": 2360307,
                    "toughness": 150,
                    "speed": 158,
                    hpBarCount: 2,
                    hpPercent: 282
                }
            ]
        }
    },
    {
        "name": "Lupine Moon-Devourer",
        "dateStart": date("23/06/2025"),
        "dateEnd": date("04/08/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "4023020",
                    "hp": 1452496,
                    "toughness": 160,
                    "speed": 132
                },
                {
                    "id": "4013010",
                    "hp": 1634059,
                    "toughness": 160,
                    "speed": 174
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 1997183,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2,
                    hpPercent: 318
                },
                {
                    "id": "4023020",
                    "hp": 1452496,
                    "toughness": 160,
                    "speed": 132,
                    hpPercent: 378
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "4033010",
                    "hp": 1173170,
                    "toughness": 160,
                    "speed": 158
                },
                {
                    "id": "4033030",
                    "hp": 1256968,
                    "toughness": 160,
                    "speed": 190
                },
                {
                    "id": "4032030",
                    "hp": 284913,
                    "toughness": 40,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2034010",
                    "hp": 2304441,
                    "toughness": 240,
                    "speed": 264,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Breath of the Othershore",
        "dateStart": date("12/05/2025"),
        "dateEnd": date("23/06/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "4014030",
                    "hp": 2723431,
                    "toughness": 180,
                    "speed": 190,
                    hpBarCount: 2
                }
            ],
            "wave2": []
        },
        "node2": {
            "wave1": [
                {
                    "id": "8003020",
                    "hp": 837979,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "2023010",
                    "hp": 1005574,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "8003020",
                    "hp": 837979,
                    "toughness": 100,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "3004020",
                    "hp": 3351915,
                    "toughness": 0,
                    "speed": 106,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Out of Home",
        "dateStart": date("31/03/2025"),
        "dateEnd": date("12/05/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "8003020",
                    "hp": 453905,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "4013010",
                    "hp": 1117305,
                    "toughness": 160,
                    "speed": 174
                },
                {
                    "id": "8003020",
                    "hp": 453905,
                    "toughness": 100,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "4034010",
                    "hp": 2269526,
                    "toughness": 240,
                    "speed": 174,
                    hpBarCount: 2
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "4023010",
                    "hp": 1256968,
                    "toughness": 160,
                    "speed": 158
                },
                {
                    "id": "4023020",
                    "hp": 1117305,
                    "toughness": 160,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "4023020",
                    "hp": 1117305,
                    "toughness": 160,
                    "speed": 132
                },
                {
                    "id": "2004010",
                    "hp": 1815621,
                    "toughness": 150,
                    "speed": 170
                },
                {
                    "id": "4023020",
                    "hp": 1117305,
                    "toughness": 160,
                    "speed": 132
                }
            ]
        }
    },
    {
        "name": "Strife of Creation",
        "dateStart": date("17/02/2025"),
        "dateEnd": date("31/03/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "8033010",
                    "hp": 1117305,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "1023010",
                    "hp": 768147,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 1536294,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2,
                    hpPercent: 244
                },
                {
                    "id": "1023010",
                    "hp": 768147,
                    "toughness": 100,
                    "speed": 132
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "3002040",
                    "hp": 109985,
                    "toughness": 30,
                    "speed": 106
                },
                {
                    "id": "4013010",
                    "hp": 1131271,
                    "toughness": 160,
                    "speed": 174
                },
                {
                    "id": "2013010",
                    "hp": 628484,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "4014020",
                    "hp": 3770904,
                    "toughness": 0,
                    "speed": 79,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Troopship Mayhem",
        "dateStart": date("06/01/2025"),
        "dateEnd": date("17/02/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "8003040",
                    "hp": 1047473,
                    "toughness": 100,
                    "speed": 227
                },
                {
                    "id": "2033010",
                    "hp": 1256968,
                    "toughness": 120,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "1014010",
                    "hp": 2304441,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2033010",
                    "hp": 1256968,
                    "toughness": 120,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "1013020",
                    "hp": 768147,
                    "toughness": 100,
                    "speed": 190
                },
                {
                    "id": "2023010",
                    "hp": 837979,
                    "toughness": 120,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 1675957,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Dancing with the Dreams",
        "dateStart": date("25/11/2024"),
        "dateEnd": date("06/01/2025"),
        "node1": {
            "wave1": [
                {
                    "id": "2013010",
                    "hp": 628484,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2033010",
                    "hp": 754181,
                    "toughness": 120,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "1014010",
                    "hp": 1634059,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2033010",
                    "hp": 754181,
                    "toughness": 120,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2032010",
                    "hp": 125697,
                    "toughness": 30,
                    "speed": 158
                },
                {
                    "id": "3003050",
                    "hp": 754181,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "2032010",
                    "hp": 125697,
                    "toughness": 30,
                    "speed": 158
                },
                {
                    "id": "3003030",
                    "hp": 754181,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2032010",
                    "hp": 125697,
                    "toughness": 30,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "3004020",
                    "hp": 2513936,
                    "toughness": 0,
                    "speed": 106,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Scalegorge Tidalflow",
        "dateStart": date("14/10/2024"),
        "dateEnd": date("25/11/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "3002010",
                    "hp": 144028,
                    "toughness": 30,
                    "speed": 132
                },
                {
                    "id": "3003050",
                    "hp": 628484,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "3003030",
                    "hp": 628484,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3002010",
                    "hp": 144028,
                    "toughness": 30,
                    "speed": 132
                },
                {
                    "id": "3002020",
                    "hp": 117841,
                    "toughness": 20,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "3004010",
                    "hp": 1728331,
                    "toughness": 0,
                    "speed": 0,
                    hpBarCount: 2
                },
                {
                    "id": "3003051",
                    "hp": 0,
                    "toughness": 60,
                    "speed": 145
                },
                {
                    "id": "3003041",
                    "hp": 0,
                    "toughness": 80,
                    "speed": 119
                },
                {
                    "id": "3003031",
                    "hp": 0,
                    "toughness": 60,
                    "speed": 119
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8003040",
                    "hp": 523737,
                    "toughness": 100,
                    "speed": 227
                },
                {
                    "id": "2023020",
                    "hp": 628484,
                    "toughness": 120,
                    "speed": 190
                }
            ],
            "wave2": [
                {
                    "id": "2034010",
                    "hp": 1440276,
                    "toughness": 240,
                    "speed": 264,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "The Big Sleep",
        "dateStart": date("02/09/2024"),
        "dateEnd": date("14/10/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "2032020",
                    "hp": 90781,
                    "toughness": 30,
                    "speed": 158
                },
                {
                    "id": "2033010",
                    "hp": 544686,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "8013010",
                    "hp": 499296,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2033010",
                    "hp": 544686,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2004010",
                    "hp": 1180153,
                    "toughness": 150,
                    "speed": 170
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "1002030",
                    "hp": 95320,
                    "toughness": 30,
                    "speed": 132
                },
                {
                    "id": "8003020",
                    "hp": 453905,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "1003010",
                    "hp": 453905,
                    "toughness": 80,
                    "speed": 158
                },
                {
                    "id": "1002030",
                    "hp": 95320,
                    "toughness": 30,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8034010",
                    "hp": 1089372,
                    "toughness": 150,
                    "speed": 158,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Dissipation of Dreams",
        "dateStart": date("22/07/2024"),
        "dateEnd": date("02/09/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "3012020",
                    "hp": 58659,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "3003040",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3003030",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3012020",
                    "hp": 58659,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "3004010",
                    "hp": 1382665,
                    "toughness": 0,
                    "speed": 0,
                    hpBarCount: 2
                },
                {
                    "id": "3003051",
                    "hp": 0,
                    "toughness": 60,
                    "speed": 145
                },
                {
                    "id": "3003041",
                    "hp": 0,
                    "toughness": 80,
                    "speed": 119
                },
                {
                    "id": "3003031",
                    "hp": 0,
                    "toughness": 60,
                    "speed": 119
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8003030",
                    "hp": 460888,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "3003050",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "3024010",
                    "hp": 628484,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "A Song's True Theme",
        "dateStart": date("10/06/2024"),
        "dateEnd": date("22/07/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "2012010",
                    "hp": 62848,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2023030",
                    "hp": 460888,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2013020",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "3024010",
                    "hp": 628484,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "3012020",
                    "hp": 58659,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "3003040",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3003030",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "3004010",
                    "hp": 1382665,
                    "toughness": 0,
                    "speed": 0,
                    hpBarCount: 2
                },
                {
                    "id": "3003051",
                    "hp": 0,
                    "toughness": 60,
                    "speed": 145
                },
                {
                    "id": "3003041",
                    "hp": 0,
                    "toughness": 80,
                    "speed": 119
                },
                {
                    "id": "3003031",
                    "hp": 0,
                    "toughness": 60,
                    "speed": 119
                }
            ]
        }
    },
    {
        "name": "Dream Within Dream",
        "dateStart": date("13/05/2024"),
        "dateEnd": date("19/06/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "3002030",
                    "hp": 94273,
                    "toughness": 30,
                    "speed": 132
                },
                {
                    "id": "3003030",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3003040",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3002030",
                    "hp": 94273,
                    "toughness": 30,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "3003030",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "1004020",
                    "hp": 1005574,
                    "toughness": 120,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8013010",
                    "hp": 460888,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2013020",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "2002030",
                    "hp": 62848,
                    "toughness": 20,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "2013020",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "2004010",
                    "hp": 1089372,
                    "toughness": 150,
                    "speed": 170
                }
            ]
        }
    },
    {
        "name": "White Night Chronicles",
        "dateStart": date("15/04/2024"),
        "dateEnd": date("27/05/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "1023020",
                    "hp": 502787,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "3013010",
                    "hp": 586585,
                    "toughness": 120,
                    "speed": 145
                }
            ],
            "wave2": [
                {
                    "id": "3013010",
                    "hp": 586585,
                    "toughness": 120,
                    "speed": 145
                },
                {
                    "id": "1004010",
                    "hp": 837979,
                    "toughness": 140,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2023030",
                    "hp": 460888,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "8033010",
                    "hp": 670383,
                    "toughness": 120,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "8034010",
                    "hp": 1005574,
                    "toughness": 150,
                    "speed": 158,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Eve of Wanton Feast",
        "dateStart": date("18/03/2024"),
        "dateEnd": date("29/04/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "8013010",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2023010",
                    "hp": 389241,
                    "toughness": 120,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "2004020",
                    "hp": 810919,
                    "toughness": 160,
                    "speed": 158,
                    hpPercent: 1555
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "1013020",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 190
                },
                {
                    "id": "2023030",
                    "hp": 356804,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "3002010",
                    "hp": 89201,
                    "toughness": 30,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "1013020",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 190
                },
                {
                    "id": "3024020",
                    "hp": 1621838,
                    "toughness": 200,
                    "speed": 158
                }
            ]
        }
    },
    {
        "name": "Dreamland of Longing",
        "dateStart": date("19/02/2024"),
        "dateEnd": date("01/04/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "3002010",
                    "hp": 89201,
                    "toughness": 30,
                    "speed": 132
                },
                {
                    "id": "2013010",
                    "hp": 324368,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "1023010",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "1023010",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "1004020",
                    "hp": 551425,
                    "toughness": 120,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2023010",
                    "hp": 389241,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "8013010",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "3014020",
                    "hp": 713609,
                    "toughness": 240,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Light of Reignition",
        "dateStart": date("22/01/2024"),
        "dateEnd": date("04/03/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "2023030",
                    "hp": 356804,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2023020",
                    "hp": 389241,
                    "toughness": 120,
                    "speed": 190
                }
            ],
            "wave2": [
                {
                    "id": "2024010",
                    "hp": 356804,
                    "toughness": 140,
                    "speed": 152,
                    hpBarCount: 2
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8003050",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2013020",
                    "hp": 389241,
                    "toughness": 100,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "2004010",
                    "hp": 648735,
                    "toughness": 150,
                    "speed": 157
                },
                {
                    "id": "2013020",
                    "hp": 389241,
                    "toughness": 100,
                    "speed": 158
                }
            ]
        }
    },
    {
        "name": "Enigma in Deep Space",
        "dateStart": date("25/12/2023"),
        "dateEnd": date("05/02/2024"),
        "node1": {
            "wave1": [
                {
                    "id": "8013010",
                    "hp": 356804,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2023010",
                    "hp": 389241,
                    "toughness": 120,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "2023010",
                    "hp": 389241,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2004010",
                    "hp": 648735,
                    "toughness": 150,
                    "speed": 157
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2023030",
                    "hp": 356804,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "1003010",
                    "hp": 324368,
                    "toughness": 80,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 583862,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Sedition of Imbibitor Lunae",
        "dateStart": date("11/12/2023"),
        "dateEnd": date("25/12/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2022110",
                    "hp": 53910,
                    "toughness": 30,
                    "speed": 132
                },
                {
                    "id": "2013010",
                    "hp": 269548,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2022110",
                    "hp": 53910,
                    "toughness": 30,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2013010",
                    "hp": 269548,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8003030",
                    "hp": 296503,
                    "toughness": 100,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "1022010",
                    "hp": 40432,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "8003020",
                    "hp": 269548,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "8003020",
                    "hp": 269548,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "1022020",
                    "hp": 40432,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "3024010",
                    "hp": 404322,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Oath of Eternal Alliance",
        "dateStart": date("27/11/2023"),
        "dateEnd": date("11/12/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "8012010",
                    "hp": 40432,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "8013010",
                    "hp": 296503,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8012020",
                    "hp": 48519,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8012010",
                    "hp": 40432,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8013010",
                    "hp": 296503,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "1004020",
                    "hp": 296503,
                    "toughness": 100,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "1022010",
                    "hp": 40432,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "8003020",
                    "hp": 269548,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "8003020",
                    "hp": 269548,
                    "toughness": 100,
                    "speed": 158
                },
                {
                    "id": "1022020",
                    "hp": 40432,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 485186,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Divine Root Subdual",
        "dateStart": date("13/11/2023"),
        "dateEnd": date("27/11/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                },
                {
                    "id": "2023020",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 190
                },
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2023020",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 190
                },
                {
                    "id": "8003040",
                    "hp": 219977,
                    "toughness": 100,
                    "speed": 227
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8003050",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8003050",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 395959,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Ambrosial Arbor's Arrival",
        "dateStart": date("30/10/2023"),
        "dateEnd": date("13/11/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                },
                {
                    "id": "2023020",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 190
                },
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2023020",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 190
                },
                {
                    "id": "8003040",
                    "hp": 219977,
                    "toughness": 100,
                    "speed": 227
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8003050",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8003050",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 395959,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Living and Flaming Catastrophes",
        "dateStart": date("16/10/2023"),
        "dateEnd": date("30/10/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                },
                {
                    "id": "2023020",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 190
                },
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2023020",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 190
                },
                {
                    "id": "8003040",
                    "hp": 219977,
                    "toughness": 100,
                    "speed": 227
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8003050",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8003050",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "8024011",
                    "hp": 395959,
                    "toughness": 160,
                    "speed": 190,
                    hpBarCount: 2
                }
            ]
        }
    },
    {
        "name": "Mara and Null",
        "dateStart": date("02/10/2023"),
        "dateEnd": date("16/10/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2023030",
                    "hp": 241975,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2023030",
                    "hp": 241975,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "1003010",
                    "hp": 219977,
                    "toughness": 80,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8011010",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8013010",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8013010",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8011020",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2004020",
                    "hp": 494949,
                    "toughness": 160,
                    "speed": 158
                }
            ]
        }
    },
    {
        "name": "A Shot From the Sky",
        "dateStart": date("18/09/2023"),
        "dateEnd": date("02/10/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2023030",
                    "hp": 241975,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2023030",
                    "hp": 241975,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "1003010",
                    "hp": 219977,
                    "toughness": 80,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8011010",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8013010",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8013010",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8011020",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2004020",
                    "hp": 494949,
                    "toughness": 160,
                    "speed": 158
                }
            ]
        }
    },
    {
        "name": "Ethereal Shipcraft",
        "dateStart": date("04/09/2023"),
        "dateEnd": date("18/09/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2023030",
                    "hp": 241975,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2023030",
                    "hp": 241975,
                    "toughness": 140,
                    "speed": 158
                },
                {
                    "id": "1003010",
                    "hp": 219977,
                    "toughness": 80,
                    "speed": 158
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "8011010",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8013010",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8013010",
                    "hp": 241975,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8011020",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2004020",
                    "hp": 494949,
                    "toughness": 160,
                    "speed": 158
                }
            ]
        }
    },
    {
        "name": "Traces of Sanctus Medicus",
        "dateStart": date("21/08/2023"),
        "dateEnd": date("04/09/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8001030",
                    "hp": 21998,
                    "toughness": 10,
                    "speed": 132
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "1023020",
                    "hp": 263973,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2023010",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                }
            ]
        }
    },
    {
        "name": "Raintear Strife",
        "dateStart": date("07/08/2023"),
        "dateEnd": date("21/08/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8001030",
                    "hp": 21998,
                    "toughness": 10,
                    "speed": 132
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "1023020",
                    "hp": 263973,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2023010",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                }
            ]
        }
    },
    {
        "name": "Adrift in Astral Seas",
        "dateStart": date("24/07/2023"),
        "dateEnd": date("07/08/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "8001030",
                    "hp": 21998,
                    "toughness": 10,
                    "speed": 132
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "8002010",
                    "hp": 41796,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "1023020",
                    "hp": 263973,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                },
                {
                    "id": "2022010",
                    "hp": 26397,
                    "toughness": 20,
                    "speed": 110
                }
            ],
            "wave2": [
                {
                    "id": "2023010",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "2022060",
                    "hp": 48395,
                    "toughness": 30,
                    "speed": 110
                }
            ]
        }
    },
    {
        "name": "Stormquell",
        "dateStart": date("10/07/2023"),
        "dateEnd": date("24/07/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2011020",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2011020",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2011010",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2013010",
                    "hp": 219977,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2011010",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "8001040",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2023010",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        }
    },
    {
        "name": "Hyperborean Search for Warmth",
        "dateStart": date("26/06/2023"),
        "dateEnd": date("10/07/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2011020",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2011020",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2011010",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2013010",
                    "hp": 219977,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2011010",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "8001040",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2023010",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        }
    },
    {
        "name": "Coldiron Tribulation",
        "dateStart": date("12/06/2023"),
        "dateEnd": date("26/06/2023"),
        "node1": {
            "wave1": [
                {
                    "id": "2011020",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2011020",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                },
                {
                    "id": "2012010",
                    "hp": 32997,
                    "toughness": 20,
                    "speed": 132
                }
            ],
            "wave2": [
                {
                    "id": "2011010",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2013010",
                    "hp": 219977,
                    "toughness": 100,
                    "speed": 132
                },
                {
                    "id": "2011010",
                    "hp": 19798,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        },
        "node2": {
            "wave1": [
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                },
                {
                    "id": "2002010",
                    "hp": 35196,
                    "toughness": 20,
                    "speed": 158
                }
            ],
            "wave2": [
                {
                    "id": "8001040",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                },
                {
                    "id": "2023010",
                    "hp": 263973,
                    "toughness": 120,
                    "speed": 158
                },
                {
                    "id": "8001050",
                    "hp": 13199,
                    "toughness": 10,
                    "speed": 110
                }
            ]
        }
    }
]

function getMonsterFull(m : Monster) : Monster{
    if (m.id == undefined) return m;
    let shortId = parseInt(m.id.slice(0, 7));
    shortId = shortId - (shortId % 10);
    if (monsters[shortId] == undefined) return m;
    return {...monsters[shortId], ...m}
}

function getFullHp(moc : MemoryOfChaos) : number{
    const hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
    let f = 0;
    if (moc.node1.wave1.length > 0) f += moc.node1.wave1.map(v => hp(v)).reduce((p, c) => p+c);
    if (moc.node1.wave2.length > 0) f += moc.node1.wave2.map(v => hp(v)).reduce((p, c) => p+c);
    if (moc.node2.wave1.length > 0) f += moc.node2.wave1.map(v => hp(v)).reduce((p, c) => p+c);
    if (moc.node2.wave2.length > 0) f += moc.node2.wave2.map(v => hp(v)).reduce((p, c) => p+c);
    return f;
}

export { memoryOfChaos, getMonsterFull, getFullHp }
import { date } from "../utils/date";
import type { ApocalypticShadow, Monster } from "./types";

const apocalyptic: ApocalypticShadow[] = [
    {
        "name": "Dominance of Netherveil",
        "dateStart": date("02/02/2026"),
        "dateEnd": date("16/03/2026"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 2.5,
            "waves": [
                [
                    {
                        "id": "2004010",
                        "hp": 4262060,
                        "hpBarCount": 2,
                        "toughness": 300,
                        "speed": 198,
                        "resist": {
                            "ICE": 0.4,
                            "LIGHTNING": 0.4,
                            "QUANTUM": 0.4
                        },
                        "weakness": ["PHYSICAL", "FIRE", "WIND", "IMAGINARY"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "ICE",
                "WIND",
                "QUANTUM",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.2,
            "waves": [
                [
                    {
                        "id": "4014030",
                        "hp": 13198637,
                        "hpBarCount": 2,
                        "toughness": 800,
                        "speed": 190,
                        "resist": {
                            "PHYSICAL": 0.2,
                            "FIRE": 0.2,
                            "LIGHTNING": 0.2
                        },
                        "weakness": ["ICE", "WIND", "QUANTUM", "IMAGINARY"]
                    }
                ]
            ]
        }
    },
    {
        "name": "Primate Knight",
        "dateStart": date("22/12/2025"),
        "dateEnd": date("02/02/2026"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 4.4,
            "waves": [
                [
                    {
                        "id": "3024010",
                        "hp": 6049375,
                        "hpBarCount": 2,
                        "toughness": 300,
                        "speed": 139,
                        "resist": {
                            "LIGHTNING": 0.6,
                            "WIND": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: ["PHYSICAL", "FIRE", "ICE", "IMAGINARY"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "ICE",
                "LIGHTNING",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 3.2,
            "waves": [
                [
                    {
                        "id": "3004020",
                        "hp": 14782474,
                        "hpBarCount": 2,
                        "toughness": 160,
                        "speed": 76,
                    }
                ]
            ]
        }
    },
    {
        "name": "Instigation of the Locusts",
        "dateStart": date("10/11/2025"),
        "dateEnd": date("22/12/2025"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "ICE",
                "QUANTUM",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 2.4,
            "waves": [
                [
                    {
                        "id": "8025010",
                        "hp": 8447128,
                        "hpBarCount": 2,
                        "toughness": 200,
                        toughnessBarCount: 3,
                        "speed": 158,
                        "resist": {
                            "FIRE": 0.4,
                            "LIGHTNING": 0.4,
                            "WIND": 0.4
                        },
                        weakness: ["PHYSICAL", "ICE", "IMAGINARY", "QUANTUM"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 2.7,
            "waves": [
                [
                    {
                        "id": "8015020",
                        "hp": 4751509,
                        "hpBarCount": 2,
                        "toughness": 380,
                        "speed": 158,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: ["WIND", "LIGHTNING", "IMAGINARY", "FIRE"]
                    }
                ]
            ]
        }
    },
    {
        "name": "Gale of Netherveil",
        "dateStart": date("29/09/2025"),
        "dateEnd": date("10/11/2025"),
        "node1": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "WIND",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 2.7,
            "waves": [
                [
                    {
                        "id": "1004010",
                        "hp": 3712117,
                        "hpBarCount": 2,
                        "toughness": [
                            190,
                            270
                        ],
                        "speed": 172,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.6,
                            "IMAGINARY": 0.6
                        },
                        weakness: [
                            "FIRE",
                            "LIGHTNING",
                            "WIND",
                            "QUANTUM"
                        ]
                    },
                    {
                        "id": "1004020",
                        "hp": 1781816,
                        "hpBarCount": 1,
                        "toughness": 200,
                        "speed": 165,
                        "resist": {
                            "PHYSICAL": 0.2,
                            "FIRE": 0.2,
                            "ICE": 0.2,
                            "WIND": 0.2
                        },
                        weakness: ["LIGHTNING", "QUANTUM", "IMAGINARY"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "ICE",
                "WIND",
                "QUANTUM",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.05,
            "waves": [
                [
                    {
                        "id": "4014030",
                        "hp": 11548808,
                        "hpBarCount": 2,
                        "toughness": 800,
                        "speed": 190,
                        "resist": {
                            "PHYSICAL": 0.2,
                            "FIRE": 0.2,
                            "LIGHTNING": 0.2
                        },
                        weakness: [
                            "ICE",
                            "WIND",
                            "QUANTUM",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Lupine Warhead",
        "dateStart": date("18/08/2025"),
        "dateEnd": date("29/09/2025"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "WIND",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 1.4,
            "waves": [
                [
                    {
                        "id": "2034010",
                        "hp": 3387650,
                        "hpBarCount": 2,
                        "toughness": 380,
                        "speed": 211,
                        "resist": {
                            "ICE": 0.4,
                            "LIGHTNING": 0.4,
                            "IMAGINARY": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "WIND",
                            "QUANTUM"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "LIGHTNING",
                "WIND"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "2035010",
                        "hp": 8469126,
                        "hpBarCount": 2,
                        "toughness": 280,
                        "speed": 190,
                        "resist": {
                            "ICE": 0.4,
                            "WIND": 0.4,
                            "IMAGINARY": 0.4
                        },
                        weakness: ["PHYSICAL", "FIRE", "LIGHTNING", "QUANTUM"]
                    }
                ]
            ]
        }
    },
    {
        "name": "Ichor Beast",
        "dateStart": date("07/07/2025"),
        "dateEnd": date("18/08/2025"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "ICE",
                "LIGHTNING",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "4034010",
                        "hp": 2419750,
                        "hpBarCount": 2,
                        hpPercent: 110,
                        "toughness": 300,
                        toughnessBarCount: 2,
                        "speed": 174,
                        "resist": {
                            "FIRE": 0.4,
                            "WIND": 0.4,
                            "IMAGINARY": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "ICE",
                            "LIGHTNING",
                            "QUANTUM"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "ICE",
                "WIND"
            ],
            "level": 90,
            "hpPercent": 2.1,
            "waves": [
                [
                    {
                        "id": "8015010",
                        "hp": 3811106,
                        "hpBarCount": 2,
                        "toughness": 100,
                        "speed": 158,
                        "resist": {
                            "LIGHTNING": 0.2,
                            "QUANTUM": 0.2,
                            "IMAGINARY": 0.2
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "ICE",
                            "WIND"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Cutting Mistral",
        "dateStart": date("26/05/2025"),
        "dateEnd": date("07/07/2025"),
        "node1": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "WIND",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 2.1,
            "waves": [
                [
                    {
                        "id": "1004010",
                        "hp": 2887202,
                        "hpBarCount": 2,
                        "toughness": [
                            190,
                            270
                        ],
                        "speed": 172,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.6,
                            "IMAGINARY": 0.6
                        },
                        weakness: [
                            "FIRE",
                            "LIGHTNING",
                            "WIND",
                            "QUANTUM"
                        ]
                    },
                    {
                        "id": "1004020",
                        "hp": 1385857,
                        "hpBarCount": 1,
                        "toughness": 200,
                        "speed": 165,
                        "resist": {
                            "PHYSICAL": 0.2,
                            "FIRE": 0.2,
                            "ICE": 0.2,
                            "WIND": 0.2
                        },
                        weakness: ["LIGHTNING", "QUANTUM", "IMAGINARY"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.8,
            "waves": [
                [
                    {
                        "id": "2004010",
                        "hp": 3068683,
                        "hpBarCount": 2,
                        "toughness": 300,
                        "speed": 198,
                        "resist": {
                            "ICE": 0.4,
                            "LIGHTNING": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "WIND",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Warlord of the Locusts",
        "dateStart": date("14/04/2025"),
        "dateEnd": date("26/05/2025"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "ICE",
                "QUANTUM",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.2,
            "waves": [
                [
                    {
                        "id": "8025010",
                        "hp": 4223564,
                        "hpBarCount": 2,
                        "toughness": 200,
                        toughnessBarCount: 2,
                        "speed": 158,
                        "resist": {
                            "FIRE": 0.4,
                            "LIGHTNING": 0.4,
                            "WIND": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "ICE",
                            "QUANTUM",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "WIND",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "2034010",
                        "hp": 2419750,
                        "hpBarCount": 2,
                        "toughness": 380,
                        "speed": 211,
                        "resist": {
                            "ICE": 0.4,
                            "LIGHTNING": 0.4,
                            "IMAGINARY": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "WIND",
                            "QUANTUM"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Gambling Primate",
        "dateStart": date("03/03/2025"),
        "dateEnd": date("14/04/2025"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "ICE",
                "LIGHTNING",
                "WIND"
            ],
            "level": 90,
            "hpPercent": 1.3,
            "waves": [
                [
                    {
                        "id": "8034010",
                        "hp": 2502242,
                        "hpBarCount": 2,
                        "toughness": 190,
                        "speed": 158,
                        "resist": {
                            "FIRE": 0.4,
                            "QUANTUM": 0.4,
                            "IMAGINARY": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "ICE",
                            "LIGHTNING",
                            "WIND"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "ICE",
                "LIGHTNING",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.2,
            "waves": [
                [
                    {
                        "id": "3004020",
                        "hp": 5543428,
                        "hpBarCount": 2,
                        "toughness": 160,
                        "speed": 76
                    }
                ]
            ]
        }
    },
    {
        "name": "Locust's Instigation",
        "dateStart": date("20/01/2025"),
        "dateEnd": date("03/03/2025"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "ICE",
                "QUANTUM",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "8025010",
                        "hp": 3519637,
                        "hpBarCount": 2,
                        "toughness": 200,
                        toughnessBarCount: 2,
                        "speed": 158,
                        "resist": {
                            "FIRE": 0.4,
                            "LIGHTNING": 0.4,
                            "WIND": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "ICE",
                            "QUANTUM",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.52,
            "waves": [
                [
                    {
                        "id": "8015020",
                        "hp": 2674924,
                        "hpBarCount": 2,
                        "toughness": 380,
                        "speed": 158,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: [
                            "FIRE",
                            "LIGHTNING",
                            "WIND",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Gusty Primate",
        "dateStart": date("09/12/2024"),
        "dateEnd": date("20/01/2025"),
        "node1": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "WIND",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 1.3,
            "waves": [
                [
                    {
                        "id": "1004010",
                        "hp": 1787315,
                        "hpBarCount": 2,
                        "toughness": [
                            190,
                            270
                        ],
                        "speed": 172,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.6,
                            "IMAGINARY": 0.6
                        },
                        weakness: [
                            "FIRE",
                            "LIGHTNING",
                            "WIND",
                            "QUANTUM"
                        ]
                    },
                    {
                        "id": "1004020",
                        "hp": 857911,
                        "hpBarCount": 1,
                        "toughness": 200,
                        "speed": 165,
                        "resist": {
                            "PHYSICAL": 0.2,
                            "FIRE": 0.2,
                            "ICE": 0.2,
                            "WIND": 0.2
                        },
                        weakness: ["LIGHTNING", "QUANTUM", "IMAGINARY"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "ICE",
                "LIGHTNING",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "3004020",
                        "hp": 4619523,
                        "hpBarCount": 2,
                        "toughness": 160,
                        "speed": 76
                    }
                ]
            ]
        }
    },
    {
        "name": "Sovereign Control",
        "dateStart": date("28/10/2024"),
        "dateEnd": date("09/12/2024"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 1.3,
            "waves": [
                [
                    {
                        "id": "2004010",
                        "hp": 2216271,
                        "hpBarCount": 2,
                        "toughness": 300,
                        "speed": 198,
                        "resist": {
                            "ICE": 0.4,
                            "LIGHTNING": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "WIND",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "QUANTUM",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "3025010",
                        "hp": 3849603,
                        "hpBarCount": 2,
                        "toughness": 80,
                        toughnessBarCount: 10,
                        "speed": 198,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.4,
                            "WIND": 0.4
                        },
                        weakness: [
                            "FIRE",
                            "LIGHTNING",
                            "QUANTUM",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Gamer's Instigation",
        "dateStart": date("16/09/2024"),
        "dateEnd": date("28/10/2024"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "ICE",
                "LIGHTNING",
                "WIND"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "8034010",
                        "hp": 1924801,
                        "hpBarCount": 2,
                        "toughness": 190,
                        "speed": 158,
                        "resist": {
                            "FIRE": 0.4,
                            "QUANTUM": 0.4,
                            "IMAGINARY": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "ICE",
                            "LIGHTNING",
                            "WIND"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "FIRE",
                "LIGHTNING",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "8015020",
                        "hp": 1759818,
                        "hpBarCount": 2,
                        "toughness": 380,
                        "speed": 158,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: [
                            "FIRE",
                            "LIGHTNING",
                            "WIND",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Dominated Evils",
        "dateStart": date("05/08/2024"),
        "dateEnd": date("16/09/2024"),
        "node1": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "WIND",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "2004010",
                        "hp": 1704824,
                        "hpBarCount": 2,
                        "toughness": 300,
                        "speed": 198,
                        "resist": {
                            "ICE": 0.4,
                            "LIGHTNING": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "WIND",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "ICE"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "8015010",
                        "hp": 1814813,
                        "hpBarCount": 2,
                        "toughness": 100,
                        "speed": 158,
                        "resist": {
                            "LIGHTNING": 0.2,
                            "QUANTUM": 0.2,
                            "IMAGINARY": 0.2
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "ICE",
                            "WIND"
                        ]
                    }
                ]
            ]
        }
    },
    {
        "name": "Stormwind Knight",
        "dateStart": date("19/06/2024"),
        "dateEnd": date("05/08/2024"),
        "node1": {
            "recommendedTypes": [
                "LIGHTNING",
                "QUANTUM"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "1004010",
                        "hp": 1374858,
                        "hpBarCount": 2,
                        "toughness": [
                            190,
                            270
                        ],
                        "speed": 172,
                        "resist": {
                            "PHYSICAL": 0.4,
                            "ICE": 0.6,
                            "IMAGINARY": 0.6
                        },
                        weakness: ["FIRE", "LIGHTNING", "WIND", "QUANTUM"]
                    },
                    {
                        "id": "1004020",
                        "hp": 659932,
                        "hpBarCount": 1,
                        "toughness": 200,
                        "speed": 165,
                        "resist": {
                            "PHYSICAL": 0.2,
                            "FIRE": 0.2,
                            "ICE": 0.2,
                            "WIND": 0.2
                        },
                        weakness: ["LIGHTNING", "QUANTUM", "IMAGINARY"]
                    }
                ]
            ]
        },
        "node2": {
            "recommendedTypes": [
                "PHYSICAL",
                "FIRE",
                "IMAGINARY"
            ],
            "level": 90,
            "hpPercent": 0,
            "waves": [
                [
                    {
                        "id": "3024010",
                        "hp": 1374858,
                        "hpBarCount": 2,
                        "toughness": 300,
                        "speed": 139,
                        "resist": {
                            "LIGHTNING": 0.6,
                            "WIND": 0.4,
                            "QUANTUM": 0.4
                        },
                        weakness: [
                            "PHYSICAL",
                            "FIRE",
                            "ICE",
                            "IMAGINARY"
                        ]
                    }
                ]
            ]
        }
    }
]

function getFullHp(apoc: ApocalypticShadow): number {
    let hp = (m: Monster) => (m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!)
    var f = 0;
    apoc.node1.waves.forEach(w => f += w.map(v => hp(v)).reduce((p, c) => p + c))
    apoc.node2.waves.forEach(w => f += w.map(v => hp(v)).reduce((p, c) => p + c))

    return f;
}

export { apocalyptic, getFullHp }
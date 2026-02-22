import { date } from "../utils/date";
import type { PFMonster, PureFiction } from "./types";

const fiction : PureFiction[] = [
    {
        "name": "Wordless Novel",
        "dateStart": date("16/02/2026"),
        "dateEnd": date("30/03/2026"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "4052010",
                        "hp": 125186,
                        "toughness": 40,
                        "amount": 12
                    },
                    {
                        "id": "1022010",
                        "hp": 57778,
                        "toughness": 20,
                        "amount": 10
                    },
                    {
                        "id": "5012110",
                        "hp": 231112,
                        "toughness": 90,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032030",
                        "hp": 285739,
                        "toughness": 40,
                        "amount": 20
                    },
                    {
                        "id": "5012030",
                        "hp": 210102,
                        "amount": 20
                    },
                    {
                        "id": "5013010",
                        "hp": 6933372,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8032020",
                        "hp": 654818,
                        "toughness": 30,
                        "amount": 20
                    },
                    {
                        "id": "4062010",
                        "hp": 744112,
                        "toughness": 30,
                        "amount": 20,
                    },
                    {
                        "id": "1004030",
                        "hp": 24555691,
                        "toughness": 240,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "4012020",
                        "hp": 100149,
                        "toughness": 30,
                        "amount": 12
                    },
                    {
                        "id": "4032010",
                        "hp": 115556,
                        "toughness": 30,
                        "amount": 10
                    },
                    {
                        "id": "5012110",
                        "hp": 231112,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032050",
                        "hp": 252123,
                        "toughness": 30,
                        "amount": 20
                    },
                    {
                        "id": "5012020",
                        "hp": 189092,
                        "amount": 20
                    },
                    {
                        "id": "4023010",
                        "hp": 6933372,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4032010",
                        "hp": 532259,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "8022010",
                        "hp": 669701,
                        "toughness": 30,
                        "amount": 20
                    },
                    {
                        "id": "8024010",
                        "hp": 24555691,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Epic Collection",
        "dateStart": date("05/01/2026"),
        "dateEnd": date("16/02/2026"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1022010",
                        "hp": 57778,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "8022020",
                        "hp": 121334,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 385187,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4062010",
                        "hp": 210102,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 40
                    },
                    {
                        "id": "4063010",
                        "hp": 6933372,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "2032010",
                        "hp": 665324,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "2032020",
                        "hp": 665324,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "2034010",
                        "hp": 27444596,
                        "toughness": 240,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "4032050",
                        "hp": 115556,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 12
                    },
                    {
                        "id": "2022110",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 385187,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032050",
                        "hp": 252123,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "2022010",
                        "hp": 100849,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "8003020",
                        "hp": 6933372,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "2022070",
                        "hp": 532259,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2022090",
                        "hp": 665324,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2024010",
                        "hp": 27444596,
                        "toughness": 160,
                        "speed": 138,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Syntax Rule",
        "dateStart": date("24/11/2025"),
        "dateEnd": date("05/01/2026"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "3012020",
                        "hp": 53926,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1012030",
                        "hp": 53926,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 385187,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4012020",
                        "hp": 218506,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4052010",
                        "hp": 273133,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 20
                    },
                    {
                        "id": "4053010",
                        "hp": 6933372,
                        "toughness": 180,
                        "speed": 173,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4062010",
                        "hp": 831654,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3002030",
                        "hp": 748489,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1004010",
                        "hp": 27444596,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "2002030",
                        "hp": 57778,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "4032050",
                        "hp": 115556,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 385187,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032040",
                        "hp": 336163,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "2022060",
                        "hp": 184890,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "2023030",
                        "hp": 6933372,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4032050",
                        "hp": 997985,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "4032030",
                        "hp": 1131050,
                        "toughness": 40,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4044010",
                        "hp": 39919412,
                        "toughness": 200,
                        "speed": 192,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Iambic Pentameter",
        "dateStart": date("13/10/2025"),
        "dateEnd": date("24/11/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "2022060",
                        "hp": 61630,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "4032050",
                        "hp": 84041,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032040",
                        "hp": 280136,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "4062010",
                        "hp": 175085,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2023030",
                        "hp": 5777810,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "3021020",
                        "hp": 674078,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3021030",
                        "hp": 392191,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3024010",
                        "hp": 20222334,
                        "toughness": 160,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "4012030",
                        "hp": 72835,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "4032030",
                        "hp": 95246,
                        "toughness": 40,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2022110",
                        "hp": 140068,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4022010",
                        "hp": 210102,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4013010",
                        "hp": 5777810,
                        "toughness": 140,
                        "speed": 158,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4012010",
                        "hp": 637310,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "8002010",
                        "hp": 612798,
                        "toughness": 20,
                        "speed": 147,
                        "amount": 20
                    },
                    {
                        "id": "4014010",
                        "hp": 20222334,
                        "toughness": 240,
                        "speed": 170,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Subjective Narrative",
        "dateStart": date("01/09/2025"),
        "dateEnd": date("13/10/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "4052010",
                        "hp": 91044,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 12
                    },
                    {
                        "id": "1022010",
                        "hp": 42020,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4052010",
                        "hp": 193469,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 20
                    },
                    {
                        "id": "8022020",
                        "hp": 187516,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 20
                    },
                    {
                        "id": "4053010",
                        "hp": 4911138,
                        "toughness": 180,
                        "speed": 173,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8032020",
                        "hp": 442965,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4032030",
                        "hp": 684583,
                        "toughness": 40,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1004030",
                        "hp": 16611203,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "4032050",
                        "hp": 84041,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 12
                    },
                    {
                        "id": "4012010",
                        "hp": 72835,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8012030",
                        "hp": 125011,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2022060",
                        "hp": 130964,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "8003020",
                        "hp": 4911138,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4032020",
                        "hp": 483235,
                        "toughness": 60,
                        "speed": 168,
                        "amount": 20
                    },
                    {
                        "id": "4032020",
                        "hp": 483235,
                        "toughness": 60,
                        "speed": 128,
                        "amount": 20
                    },
                    {
                        "id": "4034010",
                        "hp": 16611203,
                        "toughness": 240,
                        "speed": 158,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Three Act Structure",
        "dateStart": date("21/07/2025"),
        "dateEnd": date("01/09/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "8012010",
                        "hp": 42020,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "8002010",
                        "hp": 53226,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032050",
                        "hp": 168082,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "4032030",
                        "hp": 190493,
                        "toughness": 40,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2013020",
                        "hp": 4622248,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4032050",
                        "hp": 525255,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "1012010",
                        "hp": 245119,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1004020",
                        "hp": 14444524,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "3002030",
                        "hp": 63031,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "4032040",
                        "hp": 112054,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032040",
                        "hp": 224109,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "2002030",
                        "hp": 84041,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "4033010",
                        "hp": 4622248,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "2032020",
                        "hp": 315153,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "2022060",
                        "hp": 346669,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "2034010",
                        "hp": 13000072,
                        "toughness": 240,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Narrative Analysis",
        "dateStart": date("09/06/2025"),
        "dateEnd": date("21/07/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "2002030",
                        "hp": 42020,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "4032050",
                        "hp": 84041,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4032040",
                        "hp": 224109,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "2022060",
                        "hp": 123260,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "2023030",
                        "hp": 4622248,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "3021020",
                        "hp": 481484,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3021030",
                        "hp": 280136,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3024010",
                        "hp": 14444524,
                        "toughness": 160,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "4012020",
                        "hp": 72835,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "4032010",
                        "hp": 84041,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4022010",
                        "hp": 168082,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4032050",
                        "hp": 168082,
                        "toughness": 30,
                        "speed": 186,
                        "amount": 20
                    },
                    {
                        "id": "4023010",
                        "hp": 4622248,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4032010",
                        "hp": 525255,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "8022010",
                        "hp": 393942,
                        "toughness": 30,
                        "speed": 173,
                        "amount": 20
                    },
                    {
                        "id": "8024010",
                        "hp": 14444524,
                        "toughness": 160,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Structural Rules",
        "dateStart": date("28/04/2025"),
        "dateEnd": date("09/06/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "4032030",
                        "hp": 95246,
                        "toughness": 40,
                        "speed": 120,
                        "amount": 8
                    },
                    {
                        "id": "8022020",
                        "hp": 88243,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 15
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8032020",
                        "hp": 115556,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4022010",
                        "hp": 157577,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4023010",
                        "hp": 4333357,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "1002030",
                        "hp": 316204,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4032010",
                        "hp": 451720,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2004010",
                        "hp": 12422291,
                        "toughness": 150,
                        "speed": 143,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "2022010",
                        "hp": 33616,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 8
                    },
                    {
                        "id": "4012010",
                        "hp": 72835,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 15
                    },
                    {
                        "id": "3002050",
                        "hp": 280136,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8012030",
                        "hp": 110304,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2022060",
                        "hp": 115556,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "8003020",
                        "hp": 4333357,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4032020",
                        "hp": 361376,
                        "toughness": 60,
                        "speed": 168,
                        "amount": 20
                    },
                    {
                        "id": "4032024",
                        "hp": 361376,
                        "toughness": 60,
                        "speed": 128,
                        "amount": 20
                    },
                    {
                        "id": "4034010",
                        "hp": 12422291,
                        "toughness": 240,
                        "speed": 158,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Self-Fulfilling Prophecy",
        "dateStart": date("17/03/2025"),
        "dateEnd": date("28/04/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "4012020",
                        "hp": 68283,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "4012040",
                        "hp": 68283,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 262628,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3002010",
                        "hp": 125186,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4022010",
                        "hp": 136566,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1013020",
                        "hp": 3755576,
                        "toughness": 140,
                        "speed": 173,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4012040",
                        "hp": 373282,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "8022010",
                        "hp": 323032,
                        "toughness": 30,
                        "speed": 173,
                        "amount": 20
                    },
                    {
                        "id": "8024010",
                        "hp": 11844510,
                        "toughness": 160,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "8002010",
                        "hp": 49899,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "1022010",
                        "hp": 39394,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 262628,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2022110",
                        "hp": 91044,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4022010",
                        "hp": 136566,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4013010",
                        "hp": 3755576,
                        "toughness": 140,
                        "speed": 158,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "4012010",
                        "hp": 373282,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "8002010",
                        "hp": 358925,
                        "toughness": 20,
                        "speed": 147,
                        "amount": 20
                    },
                    {
                        "id": "4014014",
                        "hp": 11844510,
                        "toughness": 240,
                        "speed": 170,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Clichéd Sayings",
        "dateStart": date("03/02/2025"),
        "dateEnd": date("17/03/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "2022110",
                        "hp": 52526,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1012030",
                        "hp": 36768,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 262628,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "4012010",
                        "hp": 127462,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4012030",
                        "hp": 127462,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "4013010",
                        "hp": 4044467,
                        "toughness": 140,
                        "speed": 158,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8002010",
                        "hp": 252823,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "3002030",
                        "hp": 299396,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1004010",
                        "hp": 10977838,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "1002030",
                        "hp": 55152,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1002050",
                        "hp": 28889,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 262628,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2002030",
                        "hp": 73536,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "2022060",
                        "hp": 107852,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 20
                    },
                    {
                        "id": "8003020",
                        "hp": 4044467,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "3021020",
                        "hp": 394817,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3021030",
                        "hp": 229712,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3024010",
                        "hp": 11844510,
                        "toughness": 160,
                        "speed": 173,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Technicality Entrapment",
        "dateStart": date("23/12/2024"),
        "dateEnd": date("03/02/2025"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1012030",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 11
                    },
                    {
                        "id": "2012010",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 175085,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 3
                    }
                ],
                [
                    {
                        "id": "2032010",
                        "hp": 91044,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "1022020",
                        "hp": 68283,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "3003030",
                        "hp": 3755576,
                        "toughness": 140,
                        "speed": 120,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "1012010",
                        "hp": 156876,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1002030",
                        "hp": 235314,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "1004020",
                        "hp": 9244496,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "1002020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 11
                    },
                    {
                        "id": "2022060",
                        "hp": 38519,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 10
                    },
                    {
                        "id": "3002050",
                        "hp": 175085,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 3
                    }
                ],
                [
                    {
                        "id": "8032010",
                        "hp": 72835,
                        "toughness": 20,
                        "speed": 142,
                        "amount": 20
                    },
                    {
                        "id": "8032020",
                        "hp": 100149,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "8033010",
                        "hp": 3755576,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "2022080",
                        "hp": 175085,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 20
                    },
                    {
                        "id": "2022090",
                        "hp": 175085,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 20
                    },
                    {
                        "id": "2024010",
                        "hp": 7222262,
                        "toughness": 160,
                        "speed": 138,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Rumor Mill",
        "dateStart": date("11/11/2024"),
        "dateEnd": date("23/12/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "2022050",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "2032010",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 4
                    },
                    {
                        "id": "3003050",
                        "hp": 210102,
                        "toughness": 60,
                        "speed": 144,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2002010",
                        "hp": 78438,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 5
                    },
                    {
                        "id": "8022020",
                        "hp": 154425,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 5
                    },
                    {
                        "id": "3002050",
                        "hp": 245119,
                        "toughness": 50,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2011010",
                        "hp": 75637,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "3003050",
                        "hp": 504245,
                        "toughness": 60,
                        "speed": 144,
                        "amount": 3
                    },
                    {
                        "id": "1004030",
                        "hp": 1680817,
                        "toughness": 70,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "3002030",
                        "hp": 78788,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "2032020",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 4
                    },
                    {
                        "id": "8003040",
                        "hp": 192594,
                        "toughness": 60,
                        "speed": 178,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "1012030",
                        "hp": 73536,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "1012010",
                        "hp": 73536,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "3002050",
                        "hp": 262628,
                        "toughness": 50,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2011020",
                        "hp": 78788,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "8003040",
                        "hp": 481484,
                        "toughness": 60,
                        "speed": 178,
                        "amount": 3
                    },
                    {
                        "id": "2004020",
                        "hp": 2188564,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Volubility",
        "dateStart": date("30/09/2024"),
        "dateEnd": date("11/11/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "8002010",
                        "hp": 49899,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 4
                    },
                    {
                        "id": "3002030",
                        "hp": 59091,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "3013010",
                        "hp": 144445,
                        "toughness": 60,
                        "speed": 132,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2022110",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 7
                    },
                    {
                        "id": "2022040",
                        "hp": 61630,
                        "toughness": 30,
                        "speed": 142,
                        "amount": 3
                    },
                    {
                        "id": "3002050",
                        "hp": 192594,
                        "toughness": 50,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8011020",
                        "hp": 35717,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "3013010",
                        "hp": 327409,
                        "toughness": 60,
                        "speed": 132,
                        "amount": 3
                    },
                    {
                        "id": "1004010",
                        "hp": 1190579,
                        "toughness": 120,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "2032010",
                        "hp": 63031,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 6
                    },
                    {
                        "id": "2002010",
                        "hp": 50425,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 2
                    },
                    {
                        "id": "3003030",
                        "hp": 189092,
                        "toughness": 60,
                        "speed": 120,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "1002030",
                        "hp": 91920,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "8032020",
                        "hp": 96297,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "3002050",
                        "hp": 218856,
                        "toughness": 50,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8001020",
                        "hp": 42020,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "3003030",
                        "hp": 420204,
                        "toughness": 60,
                        "speed": 120,
                        "amount": 3
                    },
                    {
                        "id": "1004030",
                        "hp": 1400681,
                        "toughness": 70,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Words of Deceit",
        "dateStart": date("19/08/2024"),
        "dateEnd": date("30/09/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1002030",
                        "hp": 36768,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "1002050",
                        "hp": 19259,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "1003010",
                        "hp": 175085,
                        "toughness": 80,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "2022010",
                        "hp": 29414,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 4
                    },
                    {
                        "id": "2022110",
                        "hp": 49024,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 8
                    },
                    {
                        "id": "3002050",
                        "hp": 110304,
                        "toughness": 30,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "1002040",
                        "hp": 50074,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "8002010",
                        "hp": 73186,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "2004010",
                        "hp": 1251859,
                        "toughness": 150,
                        "speed": 143,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "3012020",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "3002030",
                        "hp": 39394,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 8
                    },
                    {
                        "id": "3003030",
                        "hp": 210102,
                        "toughness": 100,
                        "speed": 120,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "3012020",
                        "hp": 34317,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 8
                    },
                    {
                        "id": "3002010",
                        "hp": 67408,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "3002050",
                        "hp": 110304,
                        "toughness": 30,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "1022010",
                        "hp": 57778,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "8002010",
                        "hp": 73186,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "1004010",
                        "hp": 1444452,
                        "toughness": 120,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Out of Thin Air",
        "dateStart": date("08/07/2024"),
        "dateEnd": date("19/08/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "2012010",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "2022060",
                        "hp": 38519,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 6
                    },
                    {
                        "id": "2013020",
                        "hp": 210102,
                        "toughness": 100,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "2022020",
                        "hp": 29414,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8022020",
                        "hp": 77213,
                        "toughness": 40,
                        "speed": 173,
                        "amount": 6
                    },
                    {
                        "id": "3002050",
                        "hp": 110304,
                        "toughness": 30,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "1002030",
                        "hp": 80889,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1012010",
                        "hp": 53926,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1004020",
                        "hp": 1251859,
                        "toughness": 100,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "1022010",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "1002040",
                        "hp": 22761,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 6
                    },
                    {
                        "id": "8003010",
                        "hp": 175085,
                        "toughness": 100,
                        "speed": 120,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8012030",
                        "hp": 51475,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "2022110",
                        "hp": 49024,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "3002050",
                        "hp": 110304,
                        "toughness": 30,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2022070",
                        "hp": 67233,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "2022080",
                        "hp": 84041,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 16
                    },
                    {
                        "id": "2024010",
                        "hp": 1365664,
                        "toughness": 140,
                        "speed": 138,
                        "amount": 1
                    },
                    {
                        "id": "2022090",
                        "hp": 84041,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    }
                ]
            ]
        }
    },
    {
        "name": "Lexical Enigma",
        "dateStart": date("27/05/2024"),
        "dateEnd": date("08/07/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1022010",
                        "hp": 39394,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "2022050",
                        "hp": 52526,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "3003050",
                        "hp": 157577,
                        "toughness": 60,
                        "speed": 144,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8032010",
                        "hp": 56027,
                        "toughness": 20,
                        "speed": 142,
                        "amount": 5
                    },
                    {
                        "id": "8032020",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "8002050",
                        "hp": 98048,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8001020",
                        "hp": 47273,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "3003050",
                        "hp": 315153,
                        "toughness": 60,
                        "speed": 144,
                        "amount": 3
                    },
                    {
                        "id": "2004010",
                        "hp": 1707080,
                        "toughness": 150,
                        "speed": 143,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "3002020",
                        "hp": 70909,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 4
                    },
                    {
                        "id": "1012030",
                        "hp": 44121,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "3003010",
                        "hp": 189092,
                        "toughness": 80,
                        "speed": 120,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3002030",
                        "hp": 102425,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 7
                    },
                    {
                        "id": "3002040",
                        "hp": 79664,
                        "toughness": 30,
                        "speed": 96,
                        "amount": 3
                    },
                    {
                        "id": "8002050",
                        "hp": 127462,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3001010",
                        "hp": 66532,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "3003010",
                        "hp": 399194,
                        "toughness": 80,
                        "speed": 120,
                        "amount": 3
                    },
                    {
                        "id": "1014010",
                        "hp": 1131050,
                        "toughness": 120,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Fictitious Wordsmithing",
        "dateStart": date("29/04/2024"),
        "dateEnd": date("10/06/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1002020",
                        "hp": 39394,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "8032020",
                        "hp": 57778,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "2023020",
                        "hp": 144445,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2022060",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 100,
                        "amount": 5
                    },
                    {
                        "id": "2022050",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "8002050",
                        "hp": 98048,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3011010",
                        "hp": 52526,
                        "toughness": 10,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "2023020",
                        "hp": 288890,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 3
                    },
                    {
                        "id": "1004030",
                        "hp": 1050511,
                        "toughness": 70,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "1012010",
                        "hp": 36768,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1012030",
                        "hp": 36768,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1013020",
                        "hp": 144445,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3002010",
                        "hp": 96297,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "2012010",
                        "hp": 52526,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "8002050",
                        "hp": 98048,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3001020",
                        "hp": 52526,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "1013020",
                        "hp": 288890,
                        "toughness": 60,
                        "speed": 173,
                        "amount": 3
                    },
                    {
                        "id": "3024020",
                        "hp": 1181825,
                        "toughness": 200,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "Deceitful Chaos",
        "dateStart": date("01/04/2024"),
        "dateEnd": date("13/05/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1002030",
                        "hp": 55152,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1002050",
                        "hp": 28889,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1003010",
                        "hp": 144445,
                        "toughness": 60,
                        "speed": 144,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3002030",
                        "hp": 78788,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 5
                    },
                    {
                        "id": "2002030",
                        "hp": 52526,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 5
                    },
                    {
                        "id": "8002050",
                        "hp": 98048,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8001010",
                        "hp": 47273,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "1003010",
                        "hp": 288890,
                        "toughness": 60,
                        "speed": 144,
                        "amount": 3
                    },
                    {
                        "id": "1004020",
                        "hp": 1050511,
                        "toughness": 100,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "8002010",
                        "hp": 49899,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 4
                    },
                    {
                        "id": "1012020",
                        "hp": 19697,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 4
                    },
                    {
                        "id": "8003040",
                        "hp": 144445,
                        "toughness": 60,
                        "speed": 178,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3002030",
                        "hp": 78788,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 7
                    },
                    {
                        "id": "3002040",
                        "hp": 61280,
                        "toughness": 30,
                        "speed": 96,
                        "amount": 3
                    },
                    {
                        "id": "8002050",
                        "hp": 98048,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "8001020",
                        "hp": 50425,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 12
                    },
                    {
                        "id": "8003040",
                        "hp": 308150,
                        "toughness": 60,
                        "speed": 178,
                        "amount": 3
                    },
                    {
                        "id": "1004010",
                        "hp": 1120545,
                        "toughness": 120,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        }
    },
    {
        "name": "An Expression of Eloquence",
        "dateStart": date("04/03/2024"),
        "dateEnd": date("15/04/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1002020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "3012020",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8003050",
                        "hp": 192594,
                        "toughness": 100,
                        "speed": 120,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "8032020",
                        "hp": 38519,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8032010",
                        "hp": 28014,
                        "toughness": 20,
                        "speed": 142,
                        "amount": 6
                    },
                    {
                        "id": "8002050",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "2022070",
                        "hp": 56027,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "2022080",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "2024010",
                        "hp": 1138053,
                        "toughness": 140,
                        "speed": 138,
                        "amount": 1
                    },
                    {
                        "id": "2022090",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "1012030",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "2012010",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1023010",
                        "hp": 192594,
                        "toughness": 100,
                        "speed": 120,
                        "amount": 1
                    },
                    {
                        "id": "2011020",
                        "hp": 15758,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "3002010",
                        "hp": 48148,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "3002030",
                        "hp": 39394,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "8002050",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    },
                    {
                        "id": "3001020",
                        "hp": 17509,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "2024020",
                        "hp": 525255,
                        "toughness": 0,
                        "speed": 120,
                        "amount": 1
                    },
                    {
                        "id": "2012010",
                        "hp": 52526,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "2022110",
                        "hp": 70034,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    }
                ]
            ]
        }
    },
    {
        "name": "Tales of a Tethered Bird",
        "dateStart": date("05/02/2024"),
        "dateEnd": date("18/03/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1012030",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1012020",
                        "hp": 13131,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 4
                    },
                    {
                        "id": "8003040",
                        "hp": 175085,
                        "toughness": 100,
                        "speed": 206,
                        "amount": 1
                    },
                    {
                        "id": "8001020",
                        "hp": 10505,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "1002040",
                        "hp": 22761,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 4
                    },
                    {
                        "id": "1012010",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "8002050",
                        "hp": 63031,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    },
                    {
                        "id": "2011020",
                        "hp": 15758,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "2002010",
                        "hp": 50425,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 12
                    },
                    {
                        "id": "2012010",
                        "hp": 47273,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "2004020",
                        "hp": 787883,
                        "toughness": 160,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "8032010",
                        "hp": 28014,
                        "toughness": 20,
                        "speed": 142,
                        "amount": 6
                    },
                    {
                        "id": "8032020",
                        "hp": 38519,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8033010",
                        "hp": 245119,
                        "toughness": 120,
                        "speed": 144,
                        "amount": 1
                    }
                ],
                [
                    {
                        "id": "1002020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8012030",
                        "hp": 36768,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8002050",
                        "hp": 63031,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "3021020",
                        "hp": 69334,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 8
                    },
                    {
                        "id": "3021030",
                        "hp": 40340,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "3024010",
                        "hp": 882429,
                        "toughness": 160,
                        "speed": 173,
                        "amount": 1
                    },
                    {
                        "id": "3021040",
                        "hp": 47903,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    }
                ]
            ]
        }
    },
    {
        "name": "Youci's Wandering Words",
        "dateStart": date("08/01/2024"),
        "dateEnd": date("19/02/2024"),
        "node1": {
            "waves": [
                [
                    {
                        "id": "1002050",
                        "hp": 19259,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1002030",
                        "hp": 36768,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1003010",
                        "hp": 175085,
                        "toughness": 80,
                        "speed": 144,
                        "amount": 1
                    },
                    {
                        "id": "1012010",
                        "hp": 24512,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "1022020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 6
                    },
                    {
                        "id": "8002010",
                        "hp": 33266,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 6
                    },
                    {
                        "id": "8002050",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    }
                ],
                [
                    {
                        "id": "1002050",
                        "hp": 38519,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1002030",
                        "hp": 73536,
                        "toughness": 30,
                        "speed": 120,
                        "amount": 12
                    },
                    {
                        "id": "1004020",
                        "hp": 1138053,
                        "toughness": 100,
                        "speed": 144,
                        "amount": 1
                    }
                ]
            ]
        },
        "node2": {
            "waves": [
                [
                    {
                        "id": "1012020",
                        "hp": 13131,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 4
                    },
                    {
                        "id": "8002010",
                        "hp": 33266,
                        "toughness": 20,
                        "speed": 144,
                        "amount": 4
                    },
                    {
                        "id": "1013010",
                        "hp": 210102,
                        "toughness": 140,
                        "speed": 144,
                        "amount": 1
                    },
                    {
                        "id": "1002020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "1002020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 4
                    },
                    {
                        "id": "1012021",
                        "hp": 13131,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 4
                    },
                    {
                        "id": "8002050",
                        "hp": 77037,
                        "toughness": 30,
                        "speed": 137,
                        "amount": 2
                    },
                    {
                        "id": "8001050",
                        "hp": 10505,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 4
                    }
                ],
                [
                    {
                        "id": "1002020",
                        "hp": 52526,
                        "toughness": 20,
                        "speed": 120,
                        "amount": 8
                    },
                    {
                        "id": "1012020",
                        "hp": 26263,
                        "toughness": 20,
                        "speed": 100,
                        "amount": 8
                    },
                    {
                        "id": "1014010",
                        "hp": 962968,
                        "toughness": 120,
                        "speed": 144,
                        "amount": 1
                    },
                    {
                        "id": "8001050",
                        "hp": 21010,
                        "toughness": 10,
                        "speed": 100,
                        "amount": 8
                    }
                ]
            ]
        }
    }
]

function getFullHp(pf: PureFiction) {
    const hp = (m : PFMonster) => (m.amount != undefined ? m.amount : 1) * (m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!)
    let f = 0;
    pf.node1.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    pf.node2.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))

    return f;
}

export { fiction, getFullHp }
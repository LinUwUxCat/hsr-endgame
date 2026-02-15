import { date } from "../utils/date";
import type { AnomalyArbitration, Monster } from "./types";

const arbitration : AnomalyArbitration[] = [
    {
        knight1: {
            waves: [
                [
                    {id: "4053020", toughness: 160, hp: 4189894},
                    {id: "2023030", toughness: 140, hp: 3072589},
                    {id: "4053020", toughness: 160, hp: 4189894},
                    {id: "2023030", toughness: 140, hp: 3072589},
                ]
            ],
        },
        knight2: {
            waves: [
                [
                    {id: "4023010", toughness: 160, hp: 1815621},
                    {id: "4023020", toughness: 140, hp: 1536294},
                ], 
                [
                    {id: "8024010", toughness: 190, hp: 3072589, hpBarCount: 2}
                ]
            ],
        },
        knight3: {
            waves: [
                [
                    {id: "1013020", toughness: 100, hp: 1152221},
                    {id: "3003020", toughness: 100, hp: 1884552},
                ], 
                [
                    {id: "4064010", toughness: 120, hp: 2828178, hpBarCount: 2, toughnessBarCount: 4}
                ]
            ],
        },
        boss: {
            waves: [[{id: "3025010", toughness: 70, toughnessBarCount: 3, hp: 10818300, hpBarCount: 2.8, speed: 190}]]
        },
        bossHard: {
            waves: [[{id: "3025010", toughness: 70, toughnessBarCount: 3, hp: 50846010, hpBarCount: 2.8, speed: 216}]]
        },
        name: "Dissonance",
        dateStart: date("17/12/2025"),
        dateEnd: date("28/01/2026")
    },
    {
        knight1: {
            waves: [
                [
                    {id: "3002030", toughness: 30, hp: 392803},
                    {id: "2013020", toughness: 100, hp: 2094947},
                    {id: "2033010", toughness: 120, hp: 2094947},
                    {id: "3002030", toughness: 30, hp: 392803},
                    {id: "3002030", toughness: 30, hp: 392803},
                    {id: "2033010", toughness: 120, hp: 2094947},
                    {id: "3002030", toughness: 30, hp: 392803},
                    {id: "2013020", toughness: 100, hp: 2094947},
                    {id: "3002030", toughness: 30, hp: 392803},
                    {id: "3002030", toughness: 30, hp: 392803},
                ]
            ],
        },
        knight2: {
            waves: [
                [
                    {id: "4063010", toughness: 160, hp: 1955284},
                    {id: "2033010", toughness: 120, hp: 1466463},
                ], 
                [
                    {id: "2034010", toughness: 240, hp: 3360644, hpBarCount: 2}
                ]
            ],
        },
        knight3: {
            waves: [
                [
                    {id: "8033010", toughness: 120, hp: 1396631},
                    {id: "2023020", toughness: 120, hp: 1047473},
                ], 
                [
                    {id: "3004020", hp: 3491578, hpBarCount: 2}
                ]
            ],
        },
        boss: {
            waves: [[{id: "4015010", toughness: 320, hp: 12677695, hpBarCount: 4.6, speed: 190}]]
        },
        bossHard: {
            waves: [[{id: "4015010", toughness: 320, hp: 56345313, hpBarCount: 2.8, speed: 216}]]
        },
        name: "Illusory Realm of the Blazing Sun",
        dateStart: date("05/11/2025"),
        dateEnd: date("17/12/2025")
    },
    {
        knight1: {
            waves: [
                [
                    {id: "3012020", toughness: 20, hp: 117317},
                    {id: "3013010", toughness: 120, hp: 1173170},
                    {id: "3013010", toughness: 120, hp: 1173170},
                    {id: "3012020", toughness: 20, hp: 117317},
                ], 
                [
                    {id: "8024010", hp: 4189894, hpBarCount: 2}
                ]
            ],
        },
        knight2: {
            waves: [
                [
                    {id: "4052010", toughness: 40, hp: 272343},
                    {id: "4053010", toughness: 180, hp: 1256968},
                    {id: "4052010", toughness: 40, hp: 272343},
                    {id: "4052010", toughness: 40, hp: 272343},
                    {id: "4053010", toughness: 180, hp: 1256968},
                ], 
                [
                    {id: "3014020", toughness: 190, hp: 1843553, hpBarCount: 2}
                ]
            ],
        },
        knight3: {
            waves: [
                [
                    {id: "4032050", toughness: 30, hp: 523737},
                    {id: "4033010", toughness: 160, hp: 2444105},
                    {id: "4032010", toughness: 30, hp: 523737},
                    {id: "4032050", toughness: 30, hp: 523737},
                ], 
                [
                    {id: "4033010", toughness: 160, hp: 2444105},
                    {id: "4033030", toughness: 160, hp: 2618684},
                    {id: "4033010", toughness: 160, hp: 2444105},
                ]
            ],
        },
        boss: {
            waves: [
                [
                    {id: "4023010", toughness: 160, hp: 4687930, speed: 158},
                    {id: "4023020", toughness: 160, hp: 3966710, speed: 132}
                ],
                [ {id: "4044010", toughness: 200, hp: 43273200, speed: 211} ]
            ]
        },
        bossHard: {
            waves: [
                [
                    {id: "4023010", toughness: 160, hp: 18751720, speed: 180},
                    {id: "4023020", toughness: 160, hp: 15866840, speed: 150}
                ],
                [ {id: "4044010", toughness: 200, hp: 173092801, speed: 240} ]
            ]
        },
        name: "Intellitron Endgame",
        dateStart: date("24/09/2025"),
        dateEnd: date("05/11/2025")
    },

]

function getFullHp(aa : AnomalyArbitration, hard: boolean = false){
    let hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
    var f = 0;
    aa.knight1.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    aa.knight2.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    aa.knight3.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    if (!hard) aa.boss.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c));
    else aa.bossHard.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c));
    return f;
}

export { arbitration, getFullHp };
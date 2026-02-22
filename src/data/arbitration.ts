import type { AnomalyArbitration, Monster } from "./types";

function getFullHp(aa : AnomalyArbitration, hard: boolean = false){
    const hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
    let f = 0;
    aa.knight1.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    aa.knight2.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    aa.knight3.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    if (!hard) aa.boss.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c));
    else aa.bossHard.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c));
    return f;
}

export { getFullHp };
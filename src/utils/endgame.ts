import type { AnomalyArbitration, ApocalypticShadow, Endgame, MemoryOfChaos, Monster, PFMonster, PureFiction } from "../data/types";
import { date } from "./date";

export function sortEndgameList<T extends Endgame>(e : T[]) : T[]{
    return e.sort((a, b) => date(a.dateEnd!) < date(b.dateEnd!) ? -1 : 1);
}

export function getFullHpPF(pf: PureFiction) {
    const hp = (m : PFMonster) => (m.amount != undefined ? m.amount : 1) * (m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!)
    let f = 0;
    pf.node1.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    pf.node2.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))

    return f;
}

export function getFullHpAA(aa : AnomalyArbitration, hard: boolean = false){
    const hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
    let f = 0;
    aa.knight1.waves.forEach(w => f+=getWaveHp(w))
    aa.knight2.waves.forEach(w => f+=getWaveHp(w))
    aa.knight3.waves.forEach(w => f+=getWaveHp(w))
    if (!hard) aa.boss.waves.forEach(w => f+=getWaveHp(w));
    else aa.bossHard.waves.forEach(w => f+=getWaveHp(w));
    return f;
}

export function getFullHpMoc(moc : MemoryOfChaos) : number{
    const hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
    let f = 0;

    moc.node1.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    moc.node2.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))

    return f;
}

export function getFullHpAS(apoc: ApocalypticShadow): number {
    const hp = (m: Monster) => (m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!)
    let f = 0;
    apoc.node1.waves.forEach(w => f += w.map(v => hp(v)).reduce((p, c) => p + c))
    apoc.node2.waves.forEach(w => f += w.map(v => hp(v)).reduce((p, c) => p + c))

    return f;
}

// Get HP of the monster **GROUP**, so a single monster if Monster and multiple if PFMonster. Do not use this to display on the UI
function getMonsterHp(mon : Monster | PFMonster) : number {
    return (mon.hp ?? 0) * (mon.hpBarCount ?? 1) * ((mon as PFMonster).amount ?? 1) ;
}

function getWaveHp(wave: Monster[]): number {
    return wave.reduce((prev, cur) => prev+getMonsterHp(cur), 0);
}

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
    aa.knight1.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    aa.knight2.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    aa.knight3.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c))
    if (!hard) aa.boss.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c));
    else aa.bossHard.waves.forEach(w => f+=w.map(v => hp(v)).reduce((p,c)=>p+c));
    return f;
}

export function getFullHpMoc(moc : MemoryOfChaos) : number{
    const hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
    let f = 0;

    f += moc.node1.waves.map(w => w.map(m => hp(m))).reduce((prev, cur) => prev+cur.reduce((p,c)=>p+c, 0), 0);
    return f;
}

export function getFullHpAS(apoc: ApocalypticShadow): number {
    const hp = (m: Monster) => (m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!)
    let f = 0;
    apoc.node1.waves.forEach(w => f += w.map(v => hp(v)).reduce((p, c) => p + c))
    apoc.node2.waves.forEach(w => f += w.map(v => hp(v)).reduce((p, c) => p + c))

    return f;
}

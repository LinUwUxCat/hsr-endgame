import AA from "../data/AA.json";
import AS from "../data/AS.json";
import PF from "../data/PF.json";
import MOC from "../data/MOC.json";

type EndgameType = "MOC" | "AS" | "AA" | "PF";

let shortId = (s?: string) => (parseInt((s ?? "").slice(0,7)) - (parseInt((s ?? "").slice(0,7)) % 10)).toString()

let getFullHp = (m : {hp : number, hpBarCount?: number}) => { if (!m.hpBarCount) return m.hp; else return m.hp*m.hpBarCount}

/**
 * In this file is every util that needs to use the data directly
 * probably
 * this function is ass dawg
 */
function findMonsterInAllEndgames(id: string): {hp: number, hpHard?: string, id: string, endgame: EndgameType, dateStart: string, endgameId: string}[]{
    let arr: { hp: number; id: string; endgame: EndgameType; dateStart: string; endgameId: string; }[] = [];

    AA.forEach(aa => {
        aa.knight1.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: aa.dateStart, endgameId: aa.id, endgame: "AA"})}));
        aa.knight2.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: aa.dateStart, endgameId: aa.id, endgame: "AA"})}));
        aa.knight3.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: aa.dateStart, endgameId: aa.id, endgame: "AA"})}));
        aa.boss.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: aa.dateStart, endgameId: aa.id, endgame: "AA"})}));
    })

    AS.forEach(as => {
        as.node1.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: as.dateStart, endgameId: as.id, endgame: "AS"})}))
        as.node2.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: as.dateStart, endgameId: as.id, endgame: "AS"})}))
    })

    PF.forEach(pf => {
        pf.node1.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: pf.dateStart, endgameId: pf.id, endgame: "PF"})}))
        pf.node2.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: pf.dateStart, endgameId: pf.id, endgame: "PF"})}))
    })

    MOC.forEach(moc => {
        moc.node1.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: moc.dateStart, endgameId: moc.id, endgame: "MOC"})}))
        moc.node2.waves.forEach(w => w.forEach(m => { if (shortId(m.id) == shortId(id)) arr.push({hp: getFullHp(m), id: m.id, dateStart: moc.dateStart, endgameId: moc.id, endgame: "MOC"})}))
    })


    //Remove duplicates : https://stackoverflow.com/a/36744732
    arr = arr.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === arr.findIndex(v => {
            return JSON.stringify(v) === _value;
        });
    });

    return arr;
}

export { findMonsterInAllEndgames }
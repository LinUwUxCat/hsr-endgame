import type { ReactElement } from "react";
import type { MemoryOfChaos, Monster } from "../data/types";
import "./CurrentEndgame.css"
import MocNode from "./MocNode";

interface CurrentMocProps {
    moc : MemoryOfChaos;
}

export default function CurrentMoc({moc} : CurrentMocProps) : ReactElement {

    function getFullHp(){
        let hp = (m : Monster) => m.hpBarCount != undefined ? m.hpBarCount * m.hp! : m.hp!
        var f = moc.node1.wave1.map(v => hp(v)).reduce((p, c) => p+c);
        f += moc.node1.wave2.map(v => hp(v)).reduce((p, c) => p+c);
        f += moc.node2.wave1.map(v => hp(v)).reduce((p, c) => p+c);
        f += moc.node2.wave2.map(v => hp(v)).reduce((p, c) => p+c);
        return f;
    }

    return (
        <div className="comp">
            <MocNode node={moc.node1} nodeNbr={1} />
            <MocNode node={moc.node2} nodeNbr={2}/>
            {getFullHp()}
        </div>
    )
}
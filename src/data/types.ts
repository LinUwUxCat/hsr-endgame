interface Endgame {
    name?: string;
    dateStart?: string;
    dateEnd?: string;
    version?: string;
    id: string;
};

type ElemType = "ICE" | "FIRE" | "LIGHTNING" | "QUANTUM" | "IMAGINARY" | "WIND" | "PHYSICAL";

interface Monster {
    name?: string; 
    hp?: number;
    hpPercent?: number; // compared to normal enemy
    toughness?: number | number[];
    atk?: number;
    weakness?: ElemType[];
    hpBarCount?: number;
    toughnessBarCount?: number;
    speed?: number;
    resist?: {[key in ElemType]?: number};
    actionAdvance?: number; // AA in %

    unsure?: boolean;
    id?: string;
}

interface BaseNode { // TODO: Switch all Nodes/Phases to extend this
    waves: Monster[][];
    recommendedTypes?: ElemType[];
}

interface PFMonster extends Monster {
    amount?: number;
}

interface Effect {
    name?: string;
    effect?: string;
    id?: string;
    attribute?: Effect[];
}

interface AAPhase {
    recommendedTypes?: ElemType[];
    waves: Monster[][];
    anomaly?: Effect[];
}

interface AAKing extends AAPhase {
    buffs?: Effect[];
}

interface PFPhase {
    recommendedTypes?: ElemType[];
    waves: PFMonster[][];
}

interface MoCPhase {
    recommendedTypes?: ElemType[];
    waves: Monster[][];
    hpPercent?: number;
    atkPercent?: number;
}

interface MemoryOfChaos extends Endgame {
    node1: MoCPhase;
    node2: MoCPhase;
    turbulence?: Effect;    
};

interface AnomalyArbitration extends Endgame {
    knight1: AAPhase;
    knight2: AAPhase;
    knight3: AAPhase;
    boss: AAKing;
    bossHard: AAKing;
}

interface PureFiction extends Endgame {
    node1: PFPhase;
    node2: PFPhase;
    anomaly?: Effect[];
    buffs?: Effect[];
}

interface ASNode extends BaseNode {
    selectableBuff?: Effect[];
    bossTrait?: Effect[]
    level?: number;
    hpPercent?: number;
    atkPercent?: number;
    defPercent?: number;
}

interface ApocalypticShadow extends Endgame {
    node1: ASNode;
    node2: ASNode;
    buff?: Effect;
}

export type { ASNode, ApocalypticShadow, PureFiction, PFPhase, PFMonster, Endgame, MemoryOfChaos, Monster, ElemType, MoCPhase, AAPhase, AnomalyArbitration }
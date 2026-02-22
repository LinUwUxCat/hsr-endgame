interface OldEndgame {
    name?: string;
    dateStart?: Date;
    dateEnd?: Date;
    version?: string;
    id?: string;
};

interface Endgame {
    name?: string;
    dateStart?: string;
    dateEnd?: string;
    version?: string;
    id?: string;
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
    anomaly?: Effect[];
}

interface MoCPhase {
    recommendedTypes?: ElemType[];
    wave1: Monster[];
    wave2: Monster[];
}

interface MemoryOfChaos extends OldEndgame {
    hpPercent?: number;
    atkPercent?: number;
    node1: MoCPhase;
    node2: MoCPhase;
    turbulence?: string;    
};

interface AnomalyArbitration extends Endgame {
    knight1: AAPhase;
    knight2: AAPhase;
    knight3: AAPhase;
    boss: AAKing;
    bossHard: AAKing;
}

interface PureFiction extends OldEndgame {
    node1: PFPhase;
    node2: PFPhase;
}

interface ASNode extends BaseNode {
    buff?: Effect;
    selectableBuff?: Effect[];
    level?: number;
    hpPercent?: number; // No fucking clue what that means
}

interface ApocalypticShadow extends OldEndgame {
    node1: ASNode;
    node2: ASNode;
}

export type { ASNode, OldEndgame, ApocalypticShadow, PureFiction, PFPhase, PFMonster, Endgame, MemoryOfChaos, Monster, ElemType, MoCPhase, AAPhase, AnomalyArbitration }
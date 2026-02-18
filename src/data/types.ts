interface Endgame {
    name: string;
    dateStart: Date;
    dateEnd: Date;
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
    name: string;
    effect: string;
}

interface AAPhase {
    recommendedTypes?: ElemType[];
    waves: Monster[][];
    anomaly?: Effect[];
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

interface MemoryOfChaos extends Endgame {
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
    boss: AAPhase;
    bossHard: AAPhase;
}

interface PureFiction extends Endgame {
    node1: PFPhase;
    node2: PFPhase;
}

interface ASNode extends BaseNode {
    buff?: Effect;
    selectableBuff?: Effect[];
    level?: number;
    hpPercent?: number; // No fucking clue what that means
}

interface ApocalypticShadow extends Endgame {
    node1: ASNode;
    node2: ASNode;
}

export type { ASNode, ApocalypticShadow, PureFiction, PFPhase, PFMonster, Endgame, MemoryOfChaos, Monster, ElemType, MoCPhase, AAPhase, AnomalyArbitration }
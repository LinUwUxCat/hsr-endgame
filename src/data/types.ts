interface Endgame {
    name?: string;
    dateStart?: string;
    dateEnd?: string;
    version?: string;
    id: string;
};

type ElemType = "ICE" | "FIRE" | "LIGHTNING" | "QUANTUM" | "IMAGINARY" | "WIND" | "PHYSICAL";

interface Monster {
    name?: string; // Name
    hp?: number; // HP (preferably rounded)
    hpPercent?: number; // compared to normal enemy ? Used homdgcat data there
    toughness?: number | number[]; // Toughness if number | toughness per phase if array
    atk?: number; // Attack stat
    weakness?: ElemType[]; // Weaknesses (elements)
    hpBarCount?: number; // Number of HP bars. Note that this is relevant for the bosses in multiple HP-based phases (With dots on the left of the HP bar indicating the phase) and not for bosses like Lygus that have multiple HP bars and multiple phases but they're not based on HP.
    toughnessBarCount?: number; // Number of toughness bars
    speed?: number; // Speed stat
    resist?: {[key in ElemType]?: number}; // Elements resisted and by how much in %.
    actionAdvance?: number; // AA in %

    unsure?: boolean; // True if i'm unsure of the data. this is for manually entered data.
    id?: string; // ID of the monster.
    image?: string; // ID of image. If empty ID is used for image
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
    waves: PFMonster[][];
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

export type { ASNode, Effect, ApocalypticShadow, PureFiction, PFPhase, PFMonster, Endgame, MemoryOfChaos, Monster, ElemType, MoCPhase, AAPhase, AnomalyArbitration }
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
    toughness?: number;
    atk?: number;
    weakness?: ElemType[];
    hpBarCount?: number;
    toughnessBarCount?: number;
    speed?: number;

    id?: string;
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

export type { Endgame, MemoryOfChaos, Monster, ElemType, MoCPhase, AAPhase, AnomalyArbitration }
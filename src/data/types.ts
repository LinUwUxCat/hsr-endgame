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

    id?: string;
}

interface Phase {
    recommendedTypes?: ElemType[];
    wave1: Monster[];
    wave2: Monster[];
}

interface MemoryOfChaos extends Endgame {
    hpPercent?: number;
    atkPercent?: number;
    node1: Phase;
    node2: Phase;
    turbulence?: string;    
};

export type { Endgame, MemoryOfChaos, Monster, ElemType, Phase }
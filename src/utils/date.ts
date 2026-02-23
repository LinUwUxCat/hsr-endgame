import type { Endgame } from "../data/types";

export function date(str : string){
    const dates = str.split("/");
    const d = new Date(Date.now());
    d.setUTCFullYear(parseInt(dates[2]), parseInt(dates[1])-1, parseInt(dates[0]));
    d.setUTCHours(0)
    return d;
}

export function sd(date : Date) : string {
    return `${pad(date.getUTCDate())}/${pad(date.getUTCMonth()+1)}/${date.getUTCFullYear()}`
}

function pad(n : number) : string{
    return n < 10 ? `0${n}` : n.toString();
}

export function sortEndgameList<T extends Endgame>(e : T[]) : T[]{
    return e.sort((a, b) => date(a.dateEnd!) < date(b.dateEnd!) ? -1 : 1);
}
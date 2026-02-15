export function date(str : string){
    var dates = str.split("/");
    var d = new Date(Date.now());
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
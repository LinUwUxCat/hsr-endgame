import merge from "deepmerge-json";

export function mergeById<T extends object>(obj1: T[], obj2: T[], id: keyof T = "id" as keyof T): T[]{
    return obj1.map(item => {
        let found = obj2.find((v) => v[id] === item[id]);
        if (found == undefined) return item;
        console.log(found)
        return merge(item, found);
    })
}
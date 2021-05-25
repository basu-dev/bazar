import { Group } from "./group";

export interface SubFamily{
    codicefamiglia:number,
    codicesfamiglia:number,
    descrizione:string,
    elements?:Group[]
}

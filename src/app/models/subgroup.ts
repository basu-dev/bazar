import { Item } from "./item";

export interface SubGroup{
    codicefamiglia:number,
    codicesfamiglia:number,
    codicegruppo:number,
    codicesgruppo:number,
    descrizione:string,
    elements?:Item[]

}


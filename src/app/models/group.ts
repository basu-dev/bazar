import { SubGroup } from "./subgroup";

export interface Group{
    codicefamiglia:number,
    codicesfamiglia:number,
    codicegruppo:number,
    descrizione:string,
    elements?:SubGroup[]
}


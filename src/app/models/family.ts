import { SubFamily } from "./subfamily";

export interface Family{
    codicefamiglia:number,
    descrizione:string,
    imageBanner:string,
    cdnType:number,
    elements?:SubFamily[]
}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { family } from '../models/data/family.mock';
import { groups } from '../models/data/group.mock';
import { items } from '../models/data/item.mock';
import { subFamilies } from '../models/data/subfamily.mock';
import { subGroup } from '../models/data/subgroup.mock';
import { Family } from '../models/family';
import { Group } from '../models/group';
import { Item } from '../models/item';
import { SubFamily } from '../models/subfamily';
import { SubGroup } from '../models/subgroup';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public familes:Family[] = family;
  public subFamiles:SubFamily[] = subFamilies;
  public groups:Group[] = groups;
  public subGrups:SubGroup[] = subGroup;
  public items:Item[] = items;


  getAllFamilies():Observable<Family[]>{
    return of(this.familes);
  }
  getSubFamilyofFamily(id:number):Observable<SubFamily[]>{
    return of(this.subFamiles.filter(s=>s.codicefamiglia==id));
  }
  async getAllFamilyWithSub(){
    let families =await this.getAllFamilies().toPromise();
      await families.map(async f=>f.elements=await this.getSubFamilyofFamily(f.codicefamiglia).toPromise());
      return families;
  }
  

}

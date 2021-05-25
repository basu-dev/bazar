import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubFamily } from 'src/app/models/subfamily';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-subfamily',
  templateUrl: './subfamily.component.html',
  styleUrls: ['./subfamily.component.scss']
})
export class SubfamilyComponent implements OnInit {

  constructor(private appService:AppService,private route:ActivatedRoute) { }
  id:number;
  subFamilies:SubFamily[]=[]
  sufFamilySub:Subscription;
  ngOnInit(): void {
    this.route.params.subscribe((data:ParamMap)=>{
      this.id = data['id']
    })
    this.sufFamilySub = this.appService.getSubFamilyofFamily(this.id).subscribe(
      data=>this.subFamilies=data
    )
  }

}

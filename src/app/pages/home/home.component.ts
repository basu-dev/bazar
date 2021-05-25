import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Family } from 'src/app/models/family';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService:AppService,private router:Router) { }
  families:Family[]=[]
  ngOnInit(): void {
    this.appService.getAllFamilies().subscribe(
      data=>this.families = data,
      err=>console.error(err)
    )
  }
  clicked(item:Family){
    this.router.navigateByUrl("/category/"+item.codicefamiglia)
  }

}

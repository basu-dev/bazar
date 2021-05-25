import {Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from '../sidemenu/app.main.component';


@Component({
    selector: 'app-topbar',
    templateUrl:'./app.topbar.component.html',
    styles:[`
    #logolink{
        color:white;
        font-size:1.1rem;
        font-weight:bold;
        letter-spacing:1px;
    }
    `]
})
export class AppTopBarComponent {

    constructor(public appMain: AppMainComponent, public app: AppComponent) {
    }

}

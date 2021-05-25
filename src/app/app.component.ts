import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    topbarTheme = 'dim';

    menuTheme = 'light';

    layoutMode = 'light';

    menuMode = 'static';

    isRTL = false;

    inputStyle = 'outlined';

    nice = 'sweet';
    heave = 'this';
    solution = 'nice';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/shared/app.service';

@Component({
    selector: 'app-menu',
    template: `
    <h4>Category<h4>
    <p-panelMenu [model]="model" [style]="{'width':'300px'}"></p-panelMenu>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
    level = 0;

    constructor( private appService: AppService) { }

    ngOnInit() {
        this.fetchMenu();
    }
    createSubMenu(item: any) {

        let level = item.level ?? 0
        // console.log(item,"level",level);
        if (!item.elements) {
            let routerLink = ['']
            switch (level) {
                case 0:
                    routerLink = ['/category/' + item.codicefamiglia]
                    break;
                case 1:
                    routerLink = ['']
                case 1:
                    routerLink = ['']
                case 4:
                    routerLink = ['']
                case 5:
                    routerLink = ['']

            }
            return {
                label: item.descrizione, routerLink, level
            }
        } else {

            return { label: item.descrizione, items: item.elements.map(i => this.createSubMenu(i)) }
        }
    }
    async fetchMenu() {
        let families = await this.appService.getAllFamilyWithSub();
        let menu = families.map(f => this.createSubMenu(f))
        console.log(menu);
        this.model = menu;
    }
    showFamily() {
        this.appService.getAllFamilies().pipe(map(data => {
            return data.map(d => {
                return {
                    label: d.descrizione,
                    routerLink: ['/category/' + d.codicefamiglia]
                }
            })
        })).subscribe(
            data => {
                console.log(this.model)
                this.model = [{
                    label: 'Cagetories',
                    items: data
                }]
                console.log(this.model)
            }
        )
    }
    showSubFamily() {
        this.appService.getSubFamilyofFamily(1).pipe(map(data => {
            return data.map(d => {
                return {
                    label: d.descrizione,
                    routerLink: ['/category/' + d.codicefamiglia]
                }
            })
        })).subscribe(
            data => {
                console.log(this.model)
                this.model = [{
                    label: 'Cagetories',
                    items: data
                }]
                console.log(this.model)
            }
        )
    }
    showGroups() { }
    showSubGroups() { }
}

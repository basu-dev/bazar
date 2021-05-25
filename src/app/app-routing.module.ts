import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AppMainComponent } from './components/sidemenu/app.main.component';
import { SubfamilyComponent } from './pages/subfamily/subfamily.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // {
            //     path: '', component: AppMainComponent,
            //     children: [
            //         {path: 'pages/timeline', component: AppTimelineDemoComponent},
            //     ]
            // },
            {
                path:'',component:AppMainComponent,
                children:[
                    {path:'',component:HomeComponent},
                    {path:'category/:id',component:SubfamilyComponent}
                    
                ],
            },
            // {path:'category/:id',component:SubfamilyComponent}
           

        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

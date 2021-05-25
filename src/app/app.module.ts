import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {PanelMenuModule} from 'primeng/panelmenu';

import {AppComponent} from './app.component';
import {AppConfigComponent} from './app.config.component';
import { AppTopBarComponent } from './components/top/app.topbar.component';
import { AppBreadcrumbComponent } from './components/breadcrumb/app.breadcrumb.component';
import { AppMainComponent } from './components/sidemenu/app.main.component';
import { AppMenuComponent } from './components/sidemenu/app.menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SubfamilyComponent } from './pages/subfamily/subfamily.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PanelMenuModule,
        BreadcrumbModule,
        InputTextModule,
    ],
    declarations: [
        AppComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppMainComponent,
        HomeComponent,
        SubfamilyComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

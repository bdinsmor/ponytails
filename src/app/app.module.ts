import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule} from "@angular2-material/icon";
import {MdGridListModule} from "@angular2-material/grid-list";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdSidenavModule} from "@angular2-material/sidenav";
import {MdTooltipModule} from "@angular2-material/tooltip";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MdIcon, MdIconRegistry} from  '@angular2-material/icon';
import { LineupsComponent } from './lineups/lineups.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    LineupsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdTooltipModule,
    MdSidenavModule,
    MdGridListModule
  ],
  providers: [MdIconRegistry],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerService } from './campgrounds/server.service';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    CampgroundsComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ServerService, CampgroundsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampgroundsComponent} from './campgrounds/campgrounds.component'
import {NewComponent} from "./new/new.component";


const appRoutes: Routes = [
  { path: 'campgrounds', component: CampgroundsComponent},
  { path: 'new', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

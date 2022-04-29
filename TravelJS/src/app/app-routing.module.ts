import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './modules/packages/packages.component';
import { BookingComponent } from './modules/booking/booking.component';
import { HomeComponent } from './modules/home/home.component';
import { DefaultComponent } from './layout/default/default.component';
import { AdministratorComponent } from './modules/administrator/administrator.component';

const routes: Routes = [
  { path: '', component: DefaultComponent,
  children: [{
    path: '',
  component: HomeComponent
  },
   {
    path: 'packages',
  component: PackagesComponent
  }, 
  {
    path: 'booking',
  component: BookingComponent
  }, 
  {
    path: 'administrator',
  component: AdministratorComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

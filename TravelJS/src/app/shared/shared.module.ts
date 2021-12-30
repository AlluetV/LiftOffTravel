import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './screenComponets/header/header.component';
import { SidebarComponent } from './screenComponets/sidebar/sidebar.component';
import { DescriptionBarComponent } from './screenComponets/description-bar/description-bar.component';
import { FooterComponent } from './screenComponets/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../modules/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DescriptionBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    DescriptionBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

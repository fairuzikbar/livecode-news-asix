import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdvantageComponent } from './advantage/advantage.component';
import { HomeComponent } from './home.component';
import { MainHeadComponent } from './main-head/main-head.component';
import { PartnerComponent } from './partner/partner.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainHeadComponent,
    AdvantageComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

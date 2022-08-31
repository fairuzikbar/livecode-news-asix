import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    RouterModule,
    HomeRoutingModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }

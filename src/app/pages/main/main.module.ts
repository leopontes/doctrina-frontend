import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { GruposComponent } from './grupos/grupos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GruposComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MainRoutingModule,
    RouterModule
  ]  
})
export class MainModule { }

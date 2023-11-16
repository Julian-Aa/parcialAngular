import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosModule } from '../productos/productos.module';
import { DashboardCustomComponent } from './dashboard-custom/dashboard-custom.component';
import { SidenavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [DashboardComponent, DashboardCustomComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProductosModule,
    SidenavModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}

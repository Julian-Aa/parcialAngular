import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosModule } from '../productos/productos.module';
import { DashboardCustomComponent } from './dashboard-custom/dashboard-custom.component';

@NgModule({
  declarations: [DashboardComponent, DashboardCustomComponent],
  imports: [CommonModule, DashboardRoutingModule, ProductosModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}

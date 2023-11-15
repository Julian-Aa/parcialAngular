import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { PromocionesComponent } from './promociones/promociones/promociones.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AdminGuard } from './core/guard/admin.guard';
import { DashboardCustomComponent } from './dashboard/dashboard-custom/dashboard-custom.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboardC',
    component: DashboardCustomComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'custom', component: DashboardCustomComponent },
      { path: '', redirectTo: '/dashboardCustom', pathMatch: 'full' },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductosComponent },
      {
        path: 'promotions',
        component: PromocionesComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { ProductosComponent } from './productos/productos/productos.component';
import { PromocionesComponent } from './promociones/promociones/promociones.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'productos', component: ProductosComponent },
      { path: 'promociones', component: PromocionesComponent, canActivate: [authGuard] },
    ],
  },
  
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

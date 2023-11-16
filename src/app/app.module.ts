import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { ProductosModule } from './productos/productos.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    ProductosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

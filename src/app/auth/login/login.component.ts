import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    id: 1,
    nombre: 'Admin',
    email: 'admin@gmail.com',
    rol: 'admin',
  };
  user2 = {
    id: 2,
    nombre: 'julian',
    email: 'julian@gmail.com',
    rol: 'custom',
  };
  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  email: string = '';
  password: string = '';
  onLogin(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('user2', JSON.stringify(this.user2));
    const loggedIn = this.authService.login(this.email, this.password);
    if (loggedIn.rol == 'admin') {
      this.authService.getUser();
      this.router.navigate(['dashboard/products']);
    } else if (loggedIn.rol == 'custom') {
      this.authService.getUser();
      this.router.navigate(['dashboardC/custom']);
    } else {
    }
  }
  loginAsGuest(): void {
    this.router.navigateByUrl('dashboardC/custom');
  }
}

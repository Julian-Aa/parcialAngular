import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  email: string = '';
  password: string = '';
  onLogin(): void {
    const loggedIn = this.authService.login(this.email, this.password);
    if (loggedIn) {
      this.authService.getUser();
      this.router.navigateByUrl('dashboard/products');
    } else {
    }
  }
}

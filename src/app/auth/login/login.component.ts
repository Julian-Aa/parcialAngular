import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    // Aquí debes implementar la lógica de autenticación utilizando AuthService.
    // Por simplicidad, asumiremos que el login es exitoso siempre.
    this.authService.login(this.email, this.password);

    // Redirige a la ruta deseada después del inicio de sesión (puede ser el dashboard).
    this.router.navigate(['/dashboard']);
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const user = this.authService.getUser();
    if (user && user.role === 'Admin') {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}

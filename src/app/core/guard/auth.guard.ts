import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
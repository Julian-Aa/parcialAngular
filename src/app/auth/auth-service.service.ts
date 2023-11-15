import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedIn: boolean = false;

  private users = [
    { email: 'admin@example.com', password: 'admin', role: 'admin' },
    { email: 'cliente@example.com', password: 'cliente', role: 'cliente' },
  ];

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      return true;
    }

    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserRole(): string | null {
    const user = this.users.find(u => u.role && this.isLoggedIn);
    return user ? user.role : null;
  }
}

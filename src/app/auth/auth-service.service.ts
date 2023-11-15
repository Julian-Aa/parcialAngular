import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private userKey = 'user';
  user = {
    id: 1,
    nombre: 'Admin',
    email: 'admin@gmail.com',
    rol: 'admin',
  };
  user2 = {
    id: 1,
    nombre: 'julian',
    email: 'julian@gmail.com',
    rol: 'custom',
  };

  login(email: string, password: string): boolean {
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('user2', JSON.stringify(this.user2));
    if (email === 'admin@gmail.com' && password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    sessionStorage.removeItem(this.userKey);
  }

  getUser() {
    const userString = sessionStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }
}

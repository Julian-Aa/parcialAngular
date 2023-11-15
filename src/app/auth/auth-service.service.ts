import { jsDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  userKey = 'user';
  userString!: any;
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
  constructor() {
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('user2', JSON.stringify(this.user2));
  }

  login(email: string, password: string): any {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.userString = JSON.parse(localStorage.getItem('user')!);
    } else if (email === 'julian@gmail.com' && password === 'julian') {
      this.userString = JSON.parse(localStorage.getItem('user2')!);
    }
    return this.userString;
  }
  logout() {
    sessionStorage.removeItem(this.userKey);
  }

  getUser() {
    const userString = JSON.parse(localStorage.getItem('user')!);
    console.log(userString);
    return userString;
  }
  getUserC() {
    const userString = JSON.parse(localStorage.getItem('user2')!);
    console.log(userString);
    return userString;
  }
}

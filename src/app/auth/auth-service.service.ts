import { jsDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  userKey = 'user';
  userString!: any;
  constructor() {
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

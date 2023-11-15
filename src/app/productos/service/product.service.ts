import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return JSON.parse(sessionStorage.getItem('products') || '[]');
  }
}

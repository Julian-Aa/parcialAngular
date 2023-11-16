import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = [
    {
      id: 1,
      name: 'Producto 1',
      price: 10.99,
      imagen: 'https://m.media-amazon.com/images/I/619Bmcg-EIL.jpg',
      description: 'Descripción del producto 1',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 20.99,
      imagen:
        'https://exitocol.vtexassets.com/arquivos/ids/9154827-800-auto?v=637631028231230000&width=800&height=auto&aspect=true',
      description: 'Descripción del producto 2',
    },
  ];
  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    const storedProducts = localStorage.getItem('products');

    if (!storedProducts) {
      localStorage.setItem('products', JSON.stringify(this.products));
    } else {
      this.products = JSON.parse(storedProducts);
    }
  }
  getProducts(): any[] {
    return this.products;
  }
  /*getProducts() {
    return JSON.parse(sessionStorage.getItem('products') || '[]');
  }*/
}

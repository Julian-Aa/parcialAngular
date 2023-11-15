import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  products = this.productService.getProducts();
  constructor(private productService: ProductService) {}
}

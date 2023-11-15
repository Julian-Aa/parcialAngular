import { Component } from '@angular/core';
import { ProductService } from 'src/app/productos/service/product.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css'],
})
export class PromocionesComponent {
  products = this.productService.getProducts();
  constructor(private productService: ProductService) {}
}

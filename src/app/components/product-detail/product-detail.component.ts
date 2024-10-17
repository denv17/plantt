import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;

  constructor() {
    const productId = parseInt(this.route.snapshot.params['id'], 10);
    this.productService.getProduct(productId).then((product) => {
      this.product = product;
    });
  }
}

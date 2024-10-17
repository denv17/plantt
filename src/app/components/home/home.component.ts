import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../products-list/products-list.component';
import { Product } from '../../product';
import { ProductService } from '../../services/product.service';
import { SearchFormComponent } from '../shared/search-form/search-form.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductsListComponent,
    SearchFormComponent,
    HeroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then((products: Product[]) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(searchTerm: string) {
    if (!searchTerm) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter((product) => {
      return product?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}

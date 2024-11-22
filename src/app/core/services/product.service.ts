import { Injectable } from '@angular/core';
import { Product } from '../../features/product/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private storageKey = 'products';

  constructor() {}

  getProducts(): Product[] {
    const data = localStorage.getItem('products');
    return data ? JSON.parse(data) : [];
  }

  saveProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
}

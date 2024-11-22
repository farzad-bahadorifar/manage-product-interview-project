import { Component } from '@angular/core';
//Material Components
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatInputModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, description: 'A powerful laptop' },
    { id: 2, name: 'Phone', price: 500, description: 'A sleek smartphone' },
  ];
}

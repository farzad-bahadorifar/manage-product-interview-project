import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//Material Components
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

//   this.productForm = this.fb.group({
//     name: ['', [Validators.required]],
//     price: [null, [Validators.required, Validators.min(1)]],
//     description: ['']
// });
}

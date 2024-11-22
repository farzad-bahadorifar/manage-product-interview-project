import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './features/product/pages/product-list/product-list.component'
      ).then((m) => m.ProductListComponent);
    },
  },
  {
    path: 'create-product',
    loadComponent: () => {
      return import(
        './features/product/pages/create-product/create-product.component'
      ).then((m) => m.CreateProductComponent);
    },
  },
//   {
//     path: 'edit/:id',
//     loadComponent: () => {
//       return import(
//         './features/product/pages/edit-product/edit-product.component'
//       ).then((m) => m.EditProductComponent);
//     },
//   },
];

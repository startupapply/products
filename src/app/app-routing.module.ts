import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products/products-list/products.component";
import {AddProductComponent} from "./products/add-product/add-product.component";
import {DetailComponent} from "./products/detail/detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'product', component: ProductsComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

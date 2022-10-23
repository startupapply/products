import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddComponent } from './components/add/add.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { DetailComponentModule } from './components/detail/detail.component-module';
import { AddComponentModule } from './components/add/add.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: ProductsComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'add', component: AddComponent }
  ]), ProductsComponentModule, ProductServiceModule, DetailComponentModule, AddComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

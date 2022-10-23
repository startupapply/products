import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {ProductsComponent} from './products.component';
import {RouterLink} from '@angular/router';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, RouterLink],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsComponentModule {
}

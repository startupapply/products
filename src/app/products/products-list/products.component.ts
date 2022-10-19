import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productListTitle: string = 'Product List';
  products: Array<ProductModel> = new Array<ProductModel>();
  private subscriptions: Subscription = new Subscription();
  displayedColumns: Array<string> = ['id', 'title', 'price', 'description', 'category', 'image', 'rating', 'rating_rate'];

  constructor(private _productService: ProductsService, private _router: Router) {
  }

  ngOnInit(): void {
    this.subscriptions = this._productService.getProductsList().subscribe(
      productsData => this.products = productsData
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addProduct(): void {
    this._router.navigate(['/add-product']);
  }

  navigateToDetail(row: ProductModel): void {
    this._router.navigate([`/detail/${row.id}`]);
  }
}

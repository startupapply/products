import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  productDetail: ProductModel | undefined;
  private _subscriptions: Subscription = new Subscription();

  constructor(private _route: ActivatedRoute, private _productsService: ProductsService, private _router: Router) {
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (!!id) {
      this._subscriptions = this._productsService.getProductDetail(id).subscribe(product => {
        this.productDetail = product
      });
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  backToProductsList() {
    this._router.navigate(['/']);
  }
}

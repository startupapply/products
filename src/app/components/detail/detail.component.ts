import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-detail',
  styleUrls: ['./detail.component.scss'],
  templateUrl: './detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit{
  ProductDetail$: Observable<ProductModel> = new Observable<ProductModel>();

  constructor(private _productService: ProductService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (!!id) {
      this.ProductDetail$ = this._productService.getProductDetail(id);
    }
  }

}

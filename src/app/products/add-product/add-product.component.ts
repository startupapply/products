import {Component, OnDestroy} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewProduct} from "../../models/product.model";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnDestroy {
  private _subscriptions: Subscription = new Subscription();

  formGroup = new FormGroup(
    {
      title: new FormControl('', [Validators.required, Validators.minLength(1)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1)])
    }
  );

  constructor(private _productsService: ProductsService, private _router: Router) {
  }

  addProduct(): void {
    if (!this.formGroup.valid) {
      !this.formGroup.value.title ? this.formGroup.controls.title.setErrors({'required': true}) :
        !this.formGroup.value.price ? this.formGroup.controls.price.setErrors({'required': true}) :
          null;
      return;
    }
    const newProduct = {
      title: this.formGroup.value.title,
      price: Number(this.formGroup.value.price)
    } as NewProduct;
    this._subscriptions = this._productsService.addProduct(newProduct).subscribe(_ => this._router.navigate(['/']),
      (error) => console.log('Error happened during call addProduct ', error),
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  backToProductsList(): void {
    this._router.navigate(['/']);
  }
}

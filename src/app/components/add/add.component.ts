import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  styleUrls: ['./add.component.scss'],
  templateUrl: './add.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });

  constructor(private _productService: ProductService, private _router: Router) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this.productForm.valid ?
    this._productService.addProduct(productForm.getRawValue()).subscribe({
      next: () => '',
      error: (error) => console.log(error),
      complete: () => this._router.navigate(['/'])
    }) : null;
  }
}

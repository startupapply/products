import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ProductService {
  private readonly URL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {
  }

  getProductList(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(this.URL).pipe(
      catchError(error => {
        console.log('Error happened after getProductList called ', error);
        return of([]);
      })
    );
  }

  addProduct(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>(this.URL, product).pipe(
      catchError(error => {
        console.log('Error happened after addProduct called ', error);
        return of({} as ProductModel);
      })
    );
  }

  getProductDetail(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(this.URL + `/${id}`).pipe(
      catchError(error => {
        console.log('Error happened after getProductDetail called ', error);
        return of({} as ProductModel);
      })
    );
  }
}

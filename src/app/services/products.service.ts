import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NewProduct, NewProductResponse, ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {
  }

  getProductsList(): Observable<Array<ProductModel>> {
    return this.http.get<Array<ProductModel>>(this.URL).pipe(
      catchError(error => {
        console.log('Error happened after getProductList called ', error);
        return of([]);
      })
    );
  }

  addProduct(newProduct: NewProduct): Observable<NewProductResponse> {
    return this.http.post<NewProductResponse>(this.URL, newProduct).pipe(
      catchError(error => throwError(error))
    );
  }

  getProductDetail(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.URL + '/' + id).pipe(
      catchError(error => {
        console.log('Error happened after getProductDetail called ', error);
        return of({} as ProductModel);
      })
    );
  }
}

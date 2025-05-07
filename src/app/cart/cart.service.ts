import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _apiUrl = environment.apiUrl + "/cart";
  private _apiCheckoutUrl = environment.apiUrl + "/checkOut";
  
  constructor(private _http: HttpClient) { }

  addToCart(product: Product): Observable<Product>{
    return this._http.post<Product>(this._apiUrl, product);
  }

  getCartItems(): Observable<Product[]>{
    return this._http.get<Product[]>(this._apiUrl);
  }

  clearCart(): Observable<void>{
    return this._http.delete<void>(this._apiUrl)
  }

  checkout(products: Product[]): Observable<void>{
    return this._http.post<void>(this._apiCheckoutUrl, products);
  }
}

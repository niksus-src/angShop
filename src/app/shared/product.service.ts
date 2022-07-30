import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FbRes, Product, ProductFromBD} from './types';
import { environment } from '../../environments/environment';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient) {}

  create(product: Product) {
    return this.http
      .post<FbRes>(`${environment.fbDbUrl}/products.json`, product)
      .pipe(
        map((res: FbRes) => {
          return {
            ...product,
            id: res.name,
            date: new Date().toString(),
          };
        })
      );
  }

  getAll(): Observable<ProductFromBD[]> {
    return this.http.get(`${environment.fbDbUrl}/products.json`)
      .pipe(map((res: {[key: string]: any}) => {
        return Object.keys(res)
          .map((key: string) => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }

  getById(id: string) {
    return this.http.get<ProductFromBD>(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe(map((res) => {
        return {
            ...res,
            id,
            date: new Date(res.date).toString()
          }
      }))
  }

  remove(id: string) {
    return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`)
  }

  update(product: ProductFromBD) {
    return this.http.patch(`${environment.fbDbUrl}/products/${product.id}.json`, product)
  }
}

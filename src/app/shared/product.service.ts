import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FbRes, Product } from './types';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

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
}

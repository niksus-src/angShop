import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {ProductFromBD} from "../shared/types";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product$: Observable<ProductFromBD> = new Observable<ProductFromBD>()


  constructor(private productServ: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap(params => this.productServ.getById(params['id'])))
  }

}

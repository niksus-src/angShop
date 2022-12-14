import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
import { ProductFromBD} from "../shared/types";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  products$: Observable<ProductFromBD[]> = new Observable<ProductFromBD[]>()

  constructor(public productServ: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productServ.getAll()
  }

}

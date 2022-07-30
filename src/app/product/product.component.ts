import {Component, Input, OnInit} from '@angular/core';
import {ProductFromBD} from "../shared/types";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductFromBD = {
    info: "",
    photo: "",
    price: "",
    title: "",
    type: "",
    date: "",
    id: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}

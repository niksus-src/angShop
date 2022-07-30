import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  typeProduct = 'Phone'

  constructor(private router: Router, private productServ: ProductService) { }

  ngOnInit(): void {
  }

  setType(type: string) {
    this.typeProduct = type

    if (this.typeProduct !== 'Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.typeProduct
        }
      })

      this.productServ.setType(this.typeProduct)

    }
  }

}

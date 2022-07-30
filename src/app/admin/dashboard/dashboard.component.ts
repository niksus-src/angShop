import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../shared/product.service";
import {ProductFromBD} from "../../shared/types";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  products: ProductFromBD[] = []
  pSub: Subscription = new Subscription()
  rSub: Subscription = new Subscription()

  constructor(private productServ: ProductService) { }

  ngOnInit(): void {
    this.pSub = this.productServ.getAll().subscribe(products => {
      console.log(products)
      this.products = products
    })
  }

  remove(id: string) {
    this.rSub = this.productServ.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }


}

import { Pipe, PipeTransform } from '@angular/core';
import { ProductFromBD } from "./types";

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: ProductFromBD[], type: string): ProductFromBD[] {
    return products.filter(product => product.type ===  type)
  }
}

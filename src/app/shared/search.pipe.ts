import { Pipe, PipeTransform } from '@angular/core';
import { ProductFromBD } from "./types";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: ProductFromBD[], productName = ''): ProductFromBD[] {
    if (!productName.trim()) {
      return products
    }
    return products.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()))
  }

}

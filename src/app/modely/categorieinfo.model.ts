import {Category} from './categorie.model';
import {Product} from './producty.model';


export class categorieinfo {
  constructor(public category: Category, public currentPage: number, public pagesCount: number, public products: Product[]) {
  }
}

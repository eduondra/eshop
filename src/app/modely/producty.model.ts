import {Foto} from './foto.model';

export class Product {
  constructor(public id: number, public title: string, public description: string, public unitsInStock: number, public price: number,
              public parameters: string, public images: Foto[]) {

  }
}

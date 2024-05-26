export class ProductModel {
    id?: string;
    name?: string;
    price?: number;
  
    constructor({ id, name, price}) {
      if (id !== undefined) this.id = id;
      if (name !== undefined) this.name = name;
      if (price !== undefined) this.price = price;
    }
  }
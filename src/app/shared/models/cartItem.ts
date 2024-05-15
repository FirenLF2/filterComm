import { Filter } from './filters';

export class CartItem {
  constructor(filter: Filter, quantity: number = 1) {
    this.filter = filter;
    this.quantity = quantity;
  }
  filter: Filter;
  quantity: number = 1;

  get price(): number {
    return this.filter.price * this.quantity;
  }
}

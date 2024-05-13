import { Filter } from './filters';

export class CartItem {
  constructor(filter: Filter) {
    this.filter = filter;
  }
  filter: Filter;
  quantity: number = 1;

  get price(): number {
    return this.filter.price * this.quantity;
  }
}

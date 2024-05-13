import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { Filter } from '../../shared/models/filters';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() {}

  addToCart(filter: Filter): void {
    let cartItem = this.cart.items.find((item) => item.filter.id === filter.id);
    if (cartItem) {
      this.changeQuantity(filter.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(filter));
  }

  removeFromCart(filterId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.filter.id !== filterId
    );
  }

  changeQuantity(filterId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.filter.id === filterId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}

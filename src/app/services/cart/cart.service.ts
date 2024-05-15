import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { Filter } from '../../shared/models/filters';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartKey = 'cart';

  constructor() {
    this.cart = this.loadCart();
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  private loadCart(): Cart {
    const cartJson = localStorage.getItem(this.cartKey);
    return cartJson ? JSON.parse(cartJson) : { items: [] };
  }

  addToCart(filter: Filter): void {
    let cartItem = this.cart.items.find((item) => item.filter.id === filter.id);
    if (cartItem) {
      this.changeQuantity(filter.id, cartItem.quantity + 1);
      return;
    } else {
      this.cart.items.push(new CartItem(filter));
    }
    this.saveCart();
  }

  removeFromCart(filterId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.filter.id !== filterId
    );
    this.saveCart();
  }

  changeQuantity(filterId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.filter.id === filterId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.saveCart();
  }

  getCart(): Cart {
    return this.cart;
  }
}

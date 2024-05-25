// src/app/cart.service.ts
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
    return cartJson
      ? JSON.parse(cartJson, (key, value) => {
          if (key === 'items') {
            return value.map(
              (item: any) => new CartItem(item.filter, item.price)
            );
          }
          return value;
        })
      : { items: [] };
  }

  addToCart(filter: Filter): boolean {
    let cartItem = this.cart.items.find((item) => item.filter.id === filter.id);
    if (cartItem) {
      this.changeQuantity(filter.id, cartItem.quantity + 1);
      return false;
    } else {
      this.cart.items.push(new CartItem(filter));
      this.saveCart();
      return true;
    }
  }

  isItemInCart(filterId: number): boolean {
    return this.cart.items.some((item) => item.filter.id === filterId);
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

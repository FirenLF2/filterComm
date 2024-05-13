import { Component } from '@angular/core';
import {CartService} from "../services/cart/cart.service";
import {Cart} from "../share/models/cart";
import {CartItem} from "../share/models/cartItem";
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart()
  }
  ngOnInit(): void {

  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

}

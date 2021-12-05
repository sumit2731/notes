import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems:CartItem[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.allCartItems;
  }

  updateCart(cartItem: CartItem) {
    this.cartService.updateCart(cartItem);
  }

}

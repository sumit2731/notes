import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
  }
  
  cartUpdated(cartItem: CartItem) {
    this.cartService.updateCart(cartItem, true);
  }
}

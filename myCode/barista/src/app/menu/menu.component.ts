import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  cartItems:CartItem[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.menuItems;
    this.cartService.updateMenuItem.subscribe(cartItem => this.updateMenuItem(cartItem));
  }

  updateCart(cartItem: CartItem) {
    this.cartService.updateCart(cartItem);
  }
  updateMenuItem(cartItem:CartItem) {
    let menuItemIndex = this.cartService.itemsMenuMap[cartItem.item.id];
    this.cartItems[menuItemIndex] = {...cartItem};
  }

}

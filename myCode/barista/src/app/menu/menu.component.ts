import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from '../models';
import { CartService } from '../services/cart.service';
import {take, filter, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,OnDestroy {
  cartItems:CartItem[];
  unbinder = new EventEmitter<any>();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.menuItems;
    this.cartService.updateMenuItem.pipe(takeUntil(this.unbinder)).subscribe(cartItem => this.updateMenuItem(cartItem));
  }

  updateCart(cartItem: CartItem) {
    this.cartService.updateCart(cartItem);
  }
  updateMenuItem(cartItem:CartItem) {
    let menuItemIndex = this.cartService.itemsMenuMap[cartItem.item.id];
    this.cartItems[menuItemIndex] = {...cartItem};
  }
  ngOnDestroy() {
    this.unbinder.emit(true);
  }

}

import { Injectable } from '@angular/core';
import {CartItem, Item} from  '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //number is itemid of main cart item
  cartItems: Map<number,CartItem> = new Map();
  totalPrice = 0;
  constructor() { }

  updateCart(cartItem:CartItem) {
    let oldprice = (this.cartItems.get(cartItem.item.id)?.calucatedPrice) || 0;
    if(cartItem.quanity) {
      let itemPrice = this.getItemPrice(cartItem.item, cartItem.quanity);
      let discountedItemsPrice = 0;
      if(cartItem.discountedItems) {
        for(let discountedItem of cartItem.discountedItems) {
          discountedItemsPrice += this.getItemPrice(discountedItem.item, discountedItem.quanity);
        }
      }
      
      this.totalPrice = this.totalPrice - oldprice + itemPrice + discountedItemsPrice;
      cartItem.calucatedPrice = itemPrice + discountedItemsPrice;
      this.cartItems.set(cartItem.item.id, cartItem);
    }
    else {
      this.totalPrice -= oldprice;
      this.cartItems.delete(cartItem.item.id);
    }
  }


  getItemPrice(item:Item, qty: number) {
    let orignalPrice = item.price;
    if(item.discountPercentage) {
      orignalPrice = orignalPrice*(1 - (item.discountPercentage/100))
    }
    let taxedpriced = orignalPrice*(1 + (item.taxPercent/100));
    return taxedpriced * qty;
  }

}

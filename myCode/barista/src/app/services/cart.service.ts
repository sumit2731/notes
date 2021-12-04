import { Injectable } from '@angular/core';
import {CartItem, Item} from  '../models';
import {Items} from '../data/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   * @Author Sumeet Sood
   * @Desc This is map which stores the item added in cart
   * @param {string} key - key of mainItem
   * @param {CartItem} cartItem - actual cart item.
   */
  addedCartItems: Map<number,CartItem> = new Map();
  allCartItems: CartItem[] = [];
  /**
   * @Author Sumeet Sood
   * @Desc stores all items by key
   */
  itemsDictionary: { [key: string]: Item };
  totalPrice = 0;
  constructor() {
    this.setItemsDictionary(Items);
    this.setallCartItems(Items);
  }

  setItemsDictionary(items: Item[]) {
   for(let item of items) {
     this.itemsDictionary[item.id] = item
   }
  }

  setallCartItems(items: Item[]) {
    for(let item of items) {
      let cartItem!:CartItem;
      cartItem.item = item;
      cartItem.quanity = 0;
      cartItem.calucatedPrice = 0;
      this.allCartItems.push(cartItem);
    }
  }

  addComboDetails(cartItem: CartItem) {
    if(!cartItem.discountedItems) {
      let discountedCartItems = [];
      for(let discountedItem of (cartItem.item.discountItems || [])) {
        let discountedCartItem!:CartItem;
        discountedCartItem.item = {...this.itemsDictionary[discountedItem.id]};
        discountedCartItem.item.discountPercentage = discountedItem.discount;
        discountedCartItem.item.maxQty = discountedItem.maxQty;
        discountedCartItem.quanity = 0;
        discountedCartItem.calucatedPrice = this.getItemPrice(discountedCartItem.item, 1);
        discountedCartItems.push(discountedCartItem);
      }
    }
  }

  updateCart(cartItem:CartItem) {
    let oldprice = (this.addedCartItems.get(cartItem.item.id)?.calucatedPrice) || 0;
    if(cartItem.quanity) {
      let itemPrice = this.getItemPrice(cartItem.item, cartItem.quanity);
      let discountedItemsPrice = 0;
      if(cartItem.discountedItems) {
        for(let discountedItem of cartItem.discountedItems) {
          if(discountedItem.quanity > 0) discountedItemsPrice += this.getItemPrice(discountedItem.item, discountedItem.quanity);
        }
      }
      
      this.totalPrice = this.totalPrice - oldprice + itemPrice + discountedItemsPrice;
      cartItem.calucatedPrice = itemPrice + discountedItemsPrice;
      this.addedCartItems.set(cartItem.item.id, cartItem);
    }
    else {
      this.totalPrice -= oldprice;
      this.addedCartItems.delete(cartItem.item.id);
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

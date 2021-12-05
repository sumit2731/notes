import { Injectable } from '@angular/core';
import {CartItem, Item} from  '../models';
import {Items} from '../data/items';
import { ItemComponent } from '../item/item.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   * @Author Sumeet Sood
   * @Desc This is map which stores all items added in Cart
   * @param {string} key - key of mainItem
   * @param {CartItem} cartItem - actual cart item.
   */
  addedCartItems: Map<number,CartItem> = new Map();
  /**
   * @Author Sumeet Sood
   * @Desc These are all items converted into cartItems
   */
  allCartItems: CartItem[] = [];
  /**
   * @Author Sumeet Sood
   * @Desc stores all items by key
   */
  itemsDictionary: { [key: string]: Item } = {};
  totalPrice = 0;
  constructor() {
    this.setItemsDictionary(Items);
    this.setAllCartItems(Items);
  }

  setItemsDictionary(items: Item[]) {
   for(let item of items) this.itemsDictionary[item.id] = item
   
  }

  setAllCartItems(items: Item[]) {
    for(let item of items) this.allCartItems.push({item, quanity:0, calucatedPrice: 0});
  }

  /**
   * @Author Sumeet Sood
   * @Desc Adds combo items to cartItem if not already added
   */
  addComboDetails(cartItem: CartItem) {
    //check whether cartAdded are added previously or not
    if(!cartItem.discountedItems) {
      cartItem.discountedItems = this.getComboItems(cartItem.item.discountItems || []);
      cartItem.freeItems = this.getComboItems(cartItem.item.freeItems || []);
    }
  }

  /**
   * @Author Sumeet Sood
   * @Desc Creates combo ite for cartItem
   */
  getComboItems(itemDetails: {id: number, discount?: number, maxQty: number}[]) {

    let comboItems = [];
      for(let itemDetail of itemDetails) {
        let discountedCartItem: Partial<CartItem> = {};
        discountedCartItem.item = {...this.itemsDictionary[itemDetail.id]};
        discountedCartItem.item.discountPercentage = itemDetail.discount || 100;
        discountedCartItem.item.maxQty = itemDetail.maxQty;
        discountedCartItem.quanity = 0;
        discountedCartItem.calucatedPrice = itemDetail.discount ? Math.floor(this.getDiscountedPrice(discountedCartItem.item.price, discountedCartItem.item.discountPercentage)): 0;
        comboItems.push(discountedCartItem as CartItem);
      }
      return comboItems;
  }

  /**
   * @Author Sumeet Sood
   * @Desc Calculates the price of cartItem(combo price) and updates the total money to be paid
   * @When Quanity of item or combo price of tem is updated
   */
  updateCart(cartItem:CartItem) {
    let oldprice = (this.addedCartItems.get(cartItem.item.id)?.calucatedPrice) || 0;
    if(cartItem.quanity) {
      //let itemPrice = this.getItemPrice(cartItem.item, cartItem.quanity);
      let itemPrice = this.getPriceAftertax(cartItem.item.price,cartItem.item.taxPercent);
      let discountedItemsPrice = 0;
      if(cartItem.discountedItems) {
        for(let discountedItem of cartItem.discountedItems) {
          let priceAfterTax = this.getPriceAftertax(discountedItem.calucatedPrice, discountedItem.item.taxPercent);
          discountedItemsPrice += (discountedItem.quanity * priceAfterTax);
        }
      }
      this.totalPrice = this.totalPrice - oldprice + itemPrice + discountedItemsPrice;
      cartItem.calucatedPrice = itemPrice + discountedItemsPrice;
      this.addedCartItems.set(cartItem.item.id, cartItem);
    }
    //it means item is removed from cart
    else {
      this.totalPrice -= oldprice;
      this.addedCartItems.delete(cartItem.item.id);
    }
    console.log(this.totalPrice);
  }

  /**
   * @Author Sumeet Sood
   * @Desc Calculates the price of item after applying tax and discount
   */
  getItemPrice(item:Item, qty: number) {
    let orignalPrice = item.price;
    if(item.discountPercentage) {
      orignalPrice = orignalPrice*(1 - (item.discountPercentage/100))
    }
    let taxedpriced = orignalPrice*(1 + (item.taxPercent/100));
    return taxedpriced * qty;
  }
  getDiscountedPrice(price: number, discountPercentage: number) {
    return price*(1-(discountPercentage/100));
  }
  getPriceAftertax(price: number, taxPercentage: number) {
    return price*(1 + (taxPercentage/100));
  }
  //getPriceAfterTax(price, tax) {}

}

import { Injectable } from '@angular/core';
import {CartItem, Item} from  '../models';
import {Items} from '../data/items';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   * @Author Sumeet Sood
   * @Desc This is items which are added in cart
   */
  cartItems:CartItem[] = [];
  /**
   * @Author Sumeet Sood
   * @Desc property is item id, value is index in cartItems
   */
  itemsCartMap: any = {};
  /**
   * @Author Sumeet Sood
   * @Desc These are all items converted into menuItems
   */
  menuItems: CartItem[] = [];
  /**
   * @Author Sumeet Sood
   * @Desc stores all items by key
   */
  itemsDictionary: { [key: string]: Item } = {};
  /**
   * @Author Sumeet Sood
   * @Desc property is item id and value is index in menuItems
   * @Not needed as there will be one to one mapping
   */
  itemsMenuMap: any = {};
  totalPrice = 0;
  updateMenuItem = new Subject<CartItem>();


  constructor() {
    this.setData(Items);
  }

  setData(items: Item[]) {
    for(let i = 0; i< items.length; i++) {
      let item = items[i];
      this.itemsMenuMap[item.id] = i;
      this.itemsDictionary[item.id] = item
      this.menuItems.push({item: items[i],quanity:0, calucatedPrice: 0})
    }
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
   * @Desc Creates combo item for cartItem
   */
  getComboItems(itemDetails: {id: number, discount?: number, maxQty: number}[]) {

    let comboItems = [];
      for(let itemDetail of itemDetails) {
        let discountedCartItem: Partial<CartItem> = {};
        discountedCartItem.item = {...this.itemsDictionary[itemDetail.id]};
        discountedCartItem.item.discountPercentage = itemDetail.discount || 100;
        discountedCartItem.item.maxQty = itemDetail.maxQty;
        discountedCartItem.quanity = 0;
        discountedCartItem.calucatedPrice = itemDetail.discount ? Math.ceil(this.getDiscountedPrice(discountedCartItem.item.price, discountedCartItem.item.discountPercentage)): 0;
        comboItems.push(discountedCartItem as CartItem);
      }
      return comboItems;
  }

  /**
   * @Author Sumeet Sood
   * @Desc Calculates the price of cartItem(combo price) ,updates the total money to be paid, synsmenu qunaity if required
   * @param cartItem item added or removed in cart
   * @param updatedMenu whther menu needs to be synced
   * @When Quanity of item or combo price of item is updated
   */
  updateCart(cartItem: CartItem, updateMenu:boolean = false) {
    let index = this.itemsCartMap[cartItem.item.id] - 1;
    let oldPrice;
    //If item is alredy in cart
    if(index || (index === 0)) {
      oldPrice = this.cartItems[this.itemsCartMap[cartItem.item.id]-1].calucatedPrice;
      //quanity is getting updated
      if(cartItem.quanity) {
        cartItem.calucatedPrice = this.getComboPrice(cartItem);
        this.totalPrice = this.totalPrice - oldPrice + cartItem.calucatedPrice;
        this.cartItems[index] = {...cartItem};
      }
      //item was already added in cart, now qunaity is updated to 0
      else {
        this.totalPrice -= oldPrice;
        this.cartItems.splice(index,1);
        delete this.itemsCartMap[index];
      }
    }
    //if item is not added in cart
    else {
      // If item is being added in cart(qunaity is non zero)
      if(cartItem.quanity) {
        cartItem.calucatedPrice = this.getComboPrice(cartItem);
        this.totalPrice = this.totalPrice + cartItem.calucatedPrice;
        this.cartItems.push({...cartItem});
        this.itemsCartMap[cartItem.item.id] = this.cartItems.length;

      }
    }
    if(updateMenu) {
      this.updateMenuItem.next(cartItem);
    }
  }

  getComboPrice(cartItem: CartItem) {
    let itemPrice = this.getPriceAftertax(cartItem.item.price,cartItem.item.taxPercent);
    let discountedItemsPrice = 0;
    if(cartItem.discountedItems) {
      for(let discountedItem of cartItem.discountedItems) {
        let priceAfterTax = this.getPriceAftertax(discountedItem.calucatedPrice, discountedItem.item.taxPercent);
        discountedItemsPrice += (discountedItem.quanity * priceAfterTax);
      }
    }
    return Math.floor((itemPrice *cartItem.quanity) + discountedItemsPrice);
  }
  getDiscountedPrice(price: number, discountPercentage: number) {
    return price*(1-(discountPercentage/100));
  }
  getPriceAftertax(price: number, taxPercentage: number) {
    return price*(1 + (taxPercentage/100));
  }
}

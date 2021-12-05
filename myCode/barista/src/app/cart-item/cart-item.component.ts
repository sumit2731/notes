import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CartItem } from '../models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:CartItem;
  @Output() updateCartItem = new EventEmitter<CartItem>();
  discountItems: CartItem[];
  freeItems: CartItem[];
  itemQty:number;
  discountItemsQty: number[] = [];
  freeItemsQty: number[] = [];
  showComboButton = false;
  comboOpened = false;
  
  //@Output() updateCart = new EventEmitter<CartItem>();
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
    this.setComboDetails();
    this.showComboButton = (this.cartItem.item.discountItems || this.cartItem.item.freeItems || []).length > 0;
  }

  setComboDetails() {
    this.discountItems = (this.cartItem.discountedItems || []);
    this.freeItems = (this.cartItem.freeItems || []);
    this.setQuanity();
  }

  setQuanity() {
    this.itemQty = this.cartItem.quanity;
    for(let i = 0; i< this.discountItems.length; i++) this.discountItemsQty[i] = this.discountItems[i].quanity;
    for(let i = 0; i< this.freeItems.length; i++) this.freeItemsQty[i] = this.freeItems[i].quanity;
  }

  getComboDetails() {
    this.cartService.addComboDetails(this.cartItem);
    this.setComboDetails();
    this.showComboButton = false;
  }

  updateCart(cartItem:CartItem) {
    
    this.cartItem.quanity = this.itemQty;
    
    for(let i = 0; i< (cartItem.discountedItems || []).length; i++) {
      let discountedItem = ((cartItem?.discountedItems) || [])[i];
      discountedItem.quanity = this.discountItemsQty[i];
    }

    for(let i = 0; i< (cartItem.freeItems || []).length; i++) {
      let freeItem = ((cartItem?.freeItems) || [])[i];
      freeItem.quanity = this.freeItemsQty[i];
    }

    this.updateCartItem.emit(cartItem);
  }

}

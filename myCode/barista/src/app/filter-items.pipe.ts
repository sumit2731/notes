import { Pipe, PipeTransform } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItem } from './models';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(cartItems:CartItem[], ...args: unknown[]): unknown {
    return cartItems.filter(cartItem => (cartItem.quanity > 0));
  }

}

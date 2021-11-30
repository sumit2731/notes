import { Component } from '@angular/core';
import {Items} from './data/items';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barista';
  items = Items;

  addToCart(item:Item, qty: number) {

  }
}

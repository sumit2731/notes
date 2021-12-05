import { Component, OnInit } from '@angular/core';
import {Items} from './data/items';
import { CartItem, Item } from './models';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'barista';
  items = Items;
  cartItems:CartItem[];

  constructor() {}

  ngOnInit() {}
}

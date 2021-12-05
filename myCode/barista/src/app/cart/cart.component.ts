import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[];
  constructor() { }

  ngOnInit(): void {
  }

}

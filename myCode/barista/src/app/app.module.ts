import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ItemComponent } from './item/item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartComponent } from './cart/cart.component';
import { FilterItemsPipe } from './filter-items.pipe';


const routes = [
  {path: 'home'},
  {path:'cart'},
  {path: 'checkout'}
];

@NgModule({
  declarations: [
    AppComponent,
    //ItemComponent,
    CartItemComponent,
    CartItemsComponent,
    CartComponent,
    FilterItemsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

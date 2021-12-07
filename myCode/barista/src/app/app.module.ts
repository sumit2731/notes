import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';


const routes = [
  {path: 'home'},
  {path:'cart'},
  {path: 'checkout'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
    CartComponent,
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

import { BrowserModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ComponentRef, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Connect4Component } from './connect4/connect4.component';
import { GameSquareComponent } from './game-square/game-square.component';
import { Connect4ViewComponent } from './connect4-view/connect4-view.component';
import {initApp} from './Init';
import {MyServiceService} from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Connect4Component,
    GameSquareComponent,
   Connect4ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [ MyServiceService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

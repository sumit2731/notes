import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
      import 'ag-grid-enterprise';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

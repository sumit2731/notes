import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AlertService } from "./alert.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // You can also still use the old Http client!
    HttpClientModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}

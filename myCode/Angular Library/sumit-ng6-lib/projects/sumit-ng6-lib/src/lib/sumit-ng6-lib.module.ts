import { NgModule } from '@angular/core';
import { SumitNg6LibComponent } from './sumit-ng6-lib.component';
import { SumitComponentComponent } from './sumit-component/sumit-component.component';



@NgModule({
  declarations: [SumitNg6LibComponent, SumitComponentComponent],
  imports: [
  ],
  exports: [SumitNg6LibComponent, SumitComponentComponent]
})
export class SumitNg6LibModule { }

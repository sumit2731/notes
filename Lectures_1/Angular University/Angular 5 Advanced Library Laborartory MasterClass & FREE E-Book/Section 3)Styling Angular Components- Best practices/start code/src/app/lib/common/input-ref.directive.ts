import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'au-fa-input input'
})
export class InputRefDirective {
 focus = false;
  constructor() { }
@HostListener('focus') onFocus() {
  this.focus = true;
}
@HostListener('blur') onblur() {
  this.focus = false;
}

}

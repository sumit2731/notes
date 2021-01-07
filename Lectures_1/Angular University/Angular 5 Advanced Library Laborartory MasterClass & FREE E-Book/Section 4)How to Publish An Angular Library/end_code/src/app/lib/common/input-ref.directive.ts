import { Directive, HostListener } from '@angular/core';

@Directive({
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

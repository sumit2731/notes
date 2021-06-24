import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appInfoPopup]'
})
export class InfoPopupDirective {
  @Input() appInfoPopup!: TemplateRef<object>;
  @Input() label!: HTMLElement;
  constructor() { }

}

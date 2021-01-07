import { Component, OnInit, ViewEncapsulation, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from 'app/lib/common/input-ref.directive';



@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective) input: InputRefDirective;
  constructor() { }
  ngOnInit() {
  }
  ngAfterContentInit() {
  if (!this.input) {
    console.error('The au-fa-input needs input inside its cotent');
  }
  }
@HostBinding('class.input-focus') get isInputFocus() {
  return this.input ? this.input.focus : false;
}
  get classes() {
   const cssClasses = {};
   if (this.icon) {
     cssClasses['fa-' + this.icon] = true;
   }
   return cssClasses;
  }

}

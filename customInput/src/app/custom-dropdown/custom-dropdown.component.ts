import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Option} from './input.interface';



@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  constructor() {}

  @Input() options : Option<any>[] = [];
  @Output() onSelection = new EventEmitter<any>();
  showOptions = false;
  visisbleOptions: Option<any>[] = [];
  valueTyped = '';

  ngOnInit(): void {
    //handle click outside the event
  }

  optionChanged(searchTerm: string) {
    this.visisbleOptions = this.options.filter(option => option.label.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }
  optionSelected(index:number) {
    let option = this.visisbleOptions[index].value;
    this.onSelection.emit(option);
    this.valueTyped = '';
    this.showOptions = false;
  }

  onInputFocus() {
    this.visisbleOptions = this.options
    this.showOptions = true;
  }
  onInputBlur() {
    //this.showOptions = false;
  }

}

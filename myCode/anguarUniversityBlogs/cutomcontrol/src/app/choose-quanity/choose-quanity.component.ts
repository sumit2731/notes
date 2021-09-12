import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-choose-quanity',
  templateUrl: './choose-quanity.component.html',
  styleUrls: ['./choose-quanity.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuanityComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ChooseQuanityComponent
    }
  ]
})
export class ChooseQuanityComponent implements ControlValueAccessor,Validator {

  quantity = 0;

  @Input()
  increment= 1;

  onChange = (quantity) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  onAdd(event) {
    event.preventDefault();
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity+= this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove(event) {
    event.preventDefault()
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity-= this.increment;
      this.onChange(this.quantity);
    }
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity
        }
      };
    }
  }



}

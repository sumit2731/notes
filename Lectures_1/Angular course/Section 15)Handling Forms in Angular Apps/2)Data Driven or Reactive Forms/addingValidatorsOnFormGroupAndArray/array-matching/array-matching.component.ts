import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-array-matching',
  templateUrl: './array-matching.component.html',
  styleUrls: ['./array-matching.component.scss']
})
export class ArrayMatchingComponent implements OnInit {

  labels = ['Your password:', 'Password confirmation:'];
  controls: AbstractControl[];
  formArray: FormArray;
  exampleForm: FormGroup;
  showFormValue = false;


  ngOnInit() {

    const controlValidators = [
      Validators.required,
      Validators.minLength(8)
    ];

    const arrayValidator = (array: FormArray): { [s: string]: boolean } => {
      return array.value[0] === array.value[1] ? null : { 'unmatched': true };
    };

    this.controls = [
      new FormControl(null, controlValidators),
      new FormControl(null, controlValidators)
    ];

    this.formArray = new FormArray(
      this.controls,
      { validators: arrayValidator }
    );

    this.exampleForm = new FormGroup(
      { passwords: this.formArray }
    );

  }


  onSubmit() {

    this.showFormValue = true;

  }


  resetExampleForm() {

    this.exampleForm.reset();
    this.showFormValue = false;

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-group-matching',
  templateUrl: './group-matching.component.html',
  styleUrls: ['./group-matching.component.scss']
})
export class GroupMatchingComponent implements OnInit {

  control1: AbstractControl;
  control2: AbstractControl;
  formGroup: FormGroup;
  exampleForm: FormGroup;
  showFormValue = false;


  ngOnInit() {

    const controlValidators = [
      Validators.required,
      Validators.minLength(8)
    ];

    const groupValidator = (group: FormGroup): { [s: string]: boolean } => {
      return group.value.control1 === group.value.control2 ? null : { 'unmatched': true }
    };

    this.control1 = new FormControl(null, controlValidators);
    this.control2 = new FormControl(null, controlValidators);

    this.formGroup = new FormGroup(
      {
        control1: this.control1,
        control2: this.control2
      },
      {
        validators: groupValidator
      }
    );

    this.exampleForm = new FormGroup(
      { passwords: this.formGroup }
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

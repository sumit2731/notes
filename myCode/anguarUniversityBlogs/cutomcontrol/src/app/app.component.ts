import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,  ValidationErrors } from '@angular/forms';

function nameValidatorFactory() {
  return function nameValidator(control: AbstractControl):ValidationErrors {
    const value = control.value;
    if(value.toLowerCase() === 'sumeet') return {nameError: 'name not allowed'};
    return null;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cutomcontrol';
  form:FormGroup;
  flag = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [nameValidatorFactory()]
      }],
      range: [1]
    })
  }
  
  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl('Sumeet'),
    //   range: new FormControl(2),
    // });
    // this.form.valueChanges.subscribe(val => console.log(val));
  }
  
  getValue() {
    console.log(this.form);
    console.log(this.form.get('range'));
    console.log(this.form.get('range').errors);
    console.log(this.form.value);
  }

  showDiv() {
    this.flag = true;
    console.log(this.flag)
  }
}


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent  {

  protected contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: this.fb.group({
        givenName: 'Wayne',
        familyName: 'Riesterer',
      }),
      departments: this.fb.array([
        this.fb.group({
          name: 'Innovation',
          roles: this.fb.array([
            this.fb.group({
              name: 'Manager'
            })
          ])
        })
      ])
    });
  }

  protected getDepartments(): FormArray {
    return this.contactForm.get('departments') as FormArray;
  }

  protected onAddDepartment(): void {
    this.getDepartments().push(
      this.fb.group({
        name: '',
        roles: this.fb.array([])
      })
    )
  }

  protected getRoles(index: number): FormArray {
    return this.getDepartments().at(index).get('roles') as FormArray;
  }

  protected getRole(departmentIndex: number, roleIndex: number): FormControl {
    return this.getRoles(departmentIndex).at(roleIndex) as FormControl;
  }

  protected onAddRole(index: number): void {
    this.getRoles(index).push(
      this.fb.group({
        name: ''
      })
    );
  }

  protected onAddContact(): void {
    console.log(this.contactForm.value);
  }

  protected onClear(): void {
    for (let i = this.getDepartments().length - 1; i >= 0; i--) {
      for (let j = this.getRoles(i).length - 1; j >= 0; j--) {
        this.getRoles(i).removeAt(j);
      }
      this.getDepartments().removeAt(i);
    }
    this.contactForm.reset({
      name: {
        givenName: '',
        familyName: ''
      }
    });
  }
}






this.filtersForm = new FormGroup({
  'titre': new FormControl(this.jsonContent.Filtres[0].titre),
  'eachFiltres': new FormArray([])
});
for (let i = 0; i < this.jsonContent.Filtres[0].Contenu.length; i++) {
  (<FormArray>this.filtersForm.get('eachFiltres')).push(
    new FormGroup({
      'nomDuFiltre': new FormControl(this.jsonContent.Filtres[0].Contenu[i].nom, Validators.required),
      'eachTags': new FormArray([])
    }));
  for (let ii = 0; ii < this.jsonContent.Filtres[0].Contenu[i].cases.length; ii++) {
    /* Push a FormControl in 'eachTags' array */
    /*
    (<FormArray>this.filtersForm.get("eachFiltres").get("eachTags")).push(
       new FormControl(this.jsonContent.Filtres[0].Contenu[i].cases[ii])
    )
    */
  }
}
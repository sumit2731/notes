/* 
https://blog.angular-university.io/angular-custom-validators/

Things Covered -
    1)2 ways to pass validator to formControl in reactive forms.
    2)Setting custom validator at formControl level in reactive form.
    3)Setting custom validator at formControl level in template driven form.
    4)How to pass validator at formGroup level and how to control validation of different form control form there.
    5)Async validator
    6)updateOn property can be passed to formGroup and formControl.

A form field validator is a function that the form can call in order to decide if a given form field is valid or not.

A validator function returns true if the form field is valid according to the validator rules, or false otherwise.
2syntax for recative form - 

*/

    form = this.fb.group({
        password: [
            '', 
            [ ... array of synchronous validators ...],
            [... array of asynchronous validators ...]
        ]
    });



    form = this.fb.group({
        email: [
            '', 
            {
                validators: [ ... array of synchronous validators ...],
                asyncValidators: [ ... array of asynchronous validators ...]
                updateOn:  'change' or 'blur' or 'submit'
            }
        ],
    });




/*  
How to define validators for reactive forms -

a)define a function.
b)while defining a form control or form group, mention that function in validator array.
*/

/*  
How to define validator for template driven form -

a)define a directive that implements  Validator interface, i.e which has validate function.
    this is our validate function.

b)provide this validatr as NG_VALIDATORS token.
*/
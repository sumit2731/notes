/* what are control value accessors(value accessor directive) - 
    the Angular forms module is applying to each native HTML element a built-in Angular directive, which will be responsible for 
    tracking the value of the field, and communicate it back to the parent form.This type of special directive is known as a 
    control value accessor directive. 
    
*/

    /* 
    It is called when we programatically set the value of form control.
    */
    writeValue(value) {

    }

    /* 
    It gives us a callback that should be called whever we want to signal the value of form control have changes
    */
    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    /* 
    This gives us callback that should be called whenever we want to mark control as touched.
    */
    registerOnTouched(onTouched: any) {
        this.onTouched = onTouched;
    }

    /* 
    It is called whenevr we promatically enable or disable the value of form
    */
    setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

/* Validators attached to Form Control */


interface ValidtorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required','positive']
    }
}

const registeredValidators: ValidtorConfig = {};

function Required(target: any, propertyName: string) {
    console.log(target);
    console.log(target.constructor);
    console.log(target.constructor.name);
    console.log(registeredValidators[target.constructor.name]);
    if(registeredValidators[target.constructor.name]) {
        if (registeredValidators[target.constructor.name][propertyName]) {
            registeredValidators[target.constructor.name][propertyName].push('required');
        } else registeredValidators[target.constructor.name][propertyName] = ['required']
    }
    else registeredValidators[target.constructor.name] = { [propertyName] : ['required'] };
}

function PositiveNumber(target: any, propertyName: string) {
    if(registeredValidators[target.constructor.name]) {
        if (registeredValidators[target.constructor.name][propertyName]) {
            registeredValidators[target.constructor.name][propertyName].push('positiveNumber');
        } else registeredValidators[target.constructor.name][propertyName] = ['positiveNumber']
    }
    else registeredValidators[target.constructor.name] = { [propertyName] : ['positiveNumber'] };
}

function validate(obj: object) {
    const objValidateConfig = registeredValidators[obj.constructor.name];
    if (!objValidateConfig) return true;
    let isValid = true;
    for(let prop of Object.keys(objValidateConfig)) {
        for(let validator of objValidateConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid =  isValid && !!obj[prop];
                    break;
                case 'positiveNumber':
                    isValid = isValid && !!(obj[prop] > 0);
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const price = +(document.getElementById("price") as HTMLInputElement).value;
    const createdCourse = new Course(title, price);
    console.log(createdCourse);

    if(!validate(createdCourse)) {
        alert("Invalid Input Please try again");
    }
});

console.log(registeredValidators);
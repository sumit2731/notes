function AutoBind(target: any, name: string, descriptor: PropertyDescriptor) {
    /**
     * @This was my solution. but in tutorial a better solution is shown. here we return a
     * property descriptor, so it will replace our old property descriptor. here this inside get will refer to object
     * using which are accessing this function
     */
    //descriptor.value = descriptor.value.bind(new target.constructor());
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return descriptor.value.bind(this);
        }
    }
    return adjDescriptor;
}

class Printer {
    message = 'This works';

    @AutoBind
    showMessage() {
        console.log(this);
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
p.message = 'This is new message'

button.addEventListener('click', p.showMessage);
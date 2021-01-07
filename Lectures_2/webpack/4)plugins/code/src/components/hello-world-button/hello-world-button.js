//import './hello-world-button.css';
import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-text';
    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello World';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;
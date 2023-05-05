function Button () {
    this.enabled = true;
}

function ToggleButton () {
    // this instance created
    this.toggled = false;
    Button.call(this); // superclass constructor
}

// extends
ToggleButton.prototype = Object.create(Button.prototype);
ToggleButton.prototype.constructor = ToggleButton;

let toggleButton = new ToggleButton();
console.log(toggleButton.enabled); // true (from superclass)
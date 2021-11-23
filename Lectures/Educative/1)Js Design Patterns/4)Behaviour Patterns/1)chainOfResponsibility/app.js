class MultipleHandler {
    setNextHandler(nxtObj) {
        this.nextObj = nxtObj; 
    }
    processMultiple(number) {
        console.log(`No multiple found for ${number}`);
    }
}

class MultiPleOfTwoHandler {
    constructor() {
        super();
        this.nextObj = new MultipleHandler();
    }
    processMultiple(number) {
        if(number % 2) console.log(`number is divisible by 2`);
        else this.nxtObj.processMultiple(number);
    }
}
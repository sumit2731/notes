let obj = {
    name: "Sumeet Sood",
    f1() {
        return this.name;
    }
};
console.log(typeof obj['f1'] === 'object');
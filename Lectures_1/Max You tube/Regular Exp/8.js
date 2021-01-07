function Employee(name) {
    this.name = name;
}
let emp1 = new Employee("Sumeet Sood");
console.log(emp1.__proto__.__proto__ == Object.prototype);
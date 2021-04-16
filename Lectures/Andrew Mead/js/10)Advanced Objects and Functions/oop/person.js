class Person {
  constructor(firstName, lastName, age,likes =[]) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.likes = likes;
  }
  getBio() {
      let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
        // bio = bio + ` ${this.firstName} likes ${like}`;
        bio += ` ${this.firstName} likes ${like}.`;

    });
    return bio;
  }
  set fullName(fullName) {
      const names = fullName.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
  }
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position,likes) {
      super(firstName, lastName, age,likes);
      this.position = position;
  }
  getBio() {
      return `${this.fullName} is a ${this.position}`;
  }
  getYearsLeft() {
      return 65 - this.age;
  }
}

// const me = new Employee('Sumeet', 'Sood', 27,'architect',['Teaching', 'Biking']);
// console.log(me.getBio());
// me.setName('Nitesh Ganotra');
// console.log(me.getBio());

// const person2 = new Person('Nitesh','Ganotra', 28);
// console.log(person2.getBio());

class Student extends Person {
    constructor(firstName,lastName,age, grade, like) {
        super(firstName, lastName,age, like);
        this.grade = grade;
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} the class`;
    }
}
const me = new Employee('Sumeet','Sood', 27, 'Developer', ['coding']);
me.fullName = 'Nitesh Ganotra';
console.log(me.getBio());

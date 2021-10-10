
/* 
Sample Code
*/
class SuperHero {
    constructor(name,power) {
      this.name = name
      this.power = power
    }
}
  
  class SuperHeroWithSword extends SuperHero{
    constructor(name,power){
      super(name,power)
      this.sword = true
    }
    hasSword(){
      return `${this.name}'s power is ${this.power}, and he also has a sword now.`
    }
  }
  
  class SuperHeroWithSuperSpeed extends SuperHero{
    constructor(name,power){
      super(name,power)
      this.superSpeed = true
    }
    hasSuperSpeed(){
      return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
    }
  }
  
  
  /* 
  Poblem - Since each customization (adding a sword, the speed, or both) is a separate class, a superhero can only have one customization at a time.
  In a previous lesson, we mentioned that when a program has distinct objects with similar underlying code, it is better to use the decorator pattern rather than 
  creating various subclasses. This allows us to add multiple functionalities to an object. Similarly, the challenge also requires us to modify the code, so that each 
  superhero can have various customizations. We can achieve this using the decorator pattern.
  Your task is to modify the code, such that there is an option to add multiple customizations to a single superhero object.
  */
  class SuperHeroWithSpeedandSword extends SuperHero{
    constructor(name,power){
      super(name,power)
      this.speedAndSword = true
    }
    hasSpeedAndSword(){
      return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
    }
  }
  
  var superhero1 = new SuperHeroWithSword("Fire Man", "Fire")
  console.log(superhero1.hasSword())
  
  var superhero2 = new SuperHeroWithSuperSpeed("Fire Man", "Fire")
  console.log(superhero2.hasSuperSpeed())
  
  var superhero3 = new SuperHeroWithSpeedandSword("Ice Man", "Ice")
  console.log(superhero3.hasSpeedAndSword())



  /* 
  
  */

  class SuperHero {
    constructor(name,power) {
      this.name = name
      this.power = power
    }
  }
  
  function SuperHeroWithSword(superhero){
      superhero.sword = true
      superhero.hasSword= function(){
      return `${this.name}'s power is ${this.power}, and he also has a sword now.`
    }
    return superhero;
  } 
  
  function SuperHeroWithSuperSpeed(superhero) {
      superhero.superSpeed = true
      superhero.hasSuperSpeed= function(){
      return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
    }
    return superhero;
  }
  
  function SuperHeroWithSpeedandSword(superhero){
      superhero.speedAndSword = true
    
    superhero.hasSpeedAndSword = function(){
      return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
    }
    return superhero;
  }
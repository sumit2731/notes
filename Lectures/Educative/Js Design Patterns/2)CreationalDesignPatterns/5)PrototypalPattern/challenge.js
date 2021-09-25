const Ninja = function(name) {
    this.points = 100
    this.name = name 
  }
  
  Ninja.prototype.punch = function(otherNinja) {
    if(otherNinja.points > 0 && this.points > 0){
      otherNinja.points -= 20
      return `${otherNinja.name}'s points are ${otherNinja.points}`
    }else{
      return `Can't punch ${otherNinja.name}`
    }
    
  }
  
  Ninja.prototype.kick = function(otherNinja) {
    if(otherNinja.points > 0 && this.points > 0){
      otherNinja.points -= 50
      return `${otherNinja.name}'s points are ${otherNinja.points}`
    }else{
      return `Can't kick ${otherNinja.name}`
    }
  }
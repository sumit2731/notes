/* 
In this challenge, you have to use the chain of responsibility pattern to implement the functionality of assigning work to 
employees.

Each employee has a name and a level property. The level of an employee tells which task they can handle, that is, easy, 
medium, or hard. Hence, each employee is assigned a task depending on their level.

You have already been provided an abstract class EmployeeChain. It contains two functions:

setNextEmp: sets the next object in the chain

assignWork: assigns work to an employee depending on their level

You have to use the chain of responsibility pattern to implement these functions, so you can achieve the final goal of 
assigning work to employees.

Sample INput

var w1 = new EasyLevelWorkHandler(); 
var w2 = new MediumLevelWorkHandler(); 
var w3 = new HardLevelWorkHandler(); 
w1.setNextEmp(w2); 
w2.setNextEmp(w3); 

const emp1 = new Employee("Joe","Easy")
const emp2 = new Employee("Anne","Medium")
const emp3 = new Employee("Shawn","Hard")
  
w1.assignWork(emp1); 
w1.assignWork(emp2); 
w1.assignWork(emp3); 

*/

class Employee
{
  constructor(name,level){
    this.name = name
    this.level = level
  }
  
  getLevel(){ 
    return this.level
  } 

  getName(){
    return this.name
  }
  
}

class EmployeeChain 
{
  setNextEmp(nextEmpInChain){}
  assignWork(req){}
}
  
class EasyLevelWorkHandler extends EmployeeChain
{
  constructor(){
    super()
    this.nextEmpInChain = new EmployeeChain()
  } 
  
  setNextEmp(nextEmpObj){ 
    this.nextEmpInChain = nextEmpObj; 
  } 
  
  assignWork(req) { 
    if (req.getLevel() == "Easy") { 
      console.log("Easy work assigned to: " + req.getName()); 
    }else{ 
      this.nextEmpInChain.assignWork(req); 
    } 
  } 
} 
  
class MediumLevelWorkHandler extends EmployeeChain
{ 
  constructor(){
    super()
    this.nextEmpInChain = new EmployeeChain()
  } 
  
  setNextEmp(nextEmpObj){ 
    this.nextEmpInChain = nextEmpObj; 
  } 
  
  assignWork(req) { 
    if (req.getLevel() == "Medium") { 
      console.log("Medium work assigned to: " + req.getName()); 
    }else{ 
      this.nextEmpInChain.assignWork(req); 
    } 
  } 
} 


class HardLevelWorkHandler extends EmployeeChain
{ 
  constructor(){
    super()
    this.nextEmpInChain = new EmployeeChain()
  } 
  
  setNextEmp(nextEmpObj){ 
    this.nextEmpInChain = nextEmpObj; 
  } 
  
  assignWork(req) { 
    if (req.getLevel() == "Hard") { 
      console.log("Hard work assigned to: " + req.getName()); 
    }else{ 
      this.nextEmpInChain.assignWork(req); 
    } 
  } 
} 
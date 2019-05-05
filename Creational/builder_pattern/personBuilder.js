const Person = require('./Person');

class PersonBuilder {

  constructor(name){
    this.name = name;
  }

  makeEmployee(){
    this.isEmployee = true;
    return this;
  }

  makeManager(hours){
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours=20){
    this.hours = hours;
    return this;
  }

  withMoney(money){
    this.money = money;
    return this;
  }

  withList(list=[]){
    this.shoppingList = list;
    return this;
  }

  build(){
    const person = new Person(this);
    return person;
  }
}

module.exports = PersonBuilder;
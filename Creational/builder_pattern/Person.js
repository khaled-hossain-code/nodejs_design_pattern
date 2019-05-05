class Person {

    constructor(personBuilder) {
        this.name = personBuilder.name
        this.isEmployee = personBuilder.isEmployee;
        this.isManager = personBuilder.isManager;
        this.hours = personBuilder.hours;
        this.money = personBuilder.money;
        this.shoppingList = personBuilder.shoppingList;
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;

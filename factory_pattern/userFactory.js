var Shopper = require("./Shopper");
var Employee = require("./Employee");

const mapper = {
  employee: Employee,
  undefined: Shopper
};

const userFactory = (name, money, type, employer) => {
  return new mapper[type](name, money, employer);
};

module.exports = userFactory;

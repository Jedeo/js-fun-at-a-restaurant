class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(){
    return `Hello ${name}!`
  }
}

module.exports = Chef;

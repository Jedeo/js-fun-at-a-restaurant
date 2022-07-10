class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    // this.checkForFood(foodItem){
    //   // if(foodItem.includes(foodItem.name)){
    //   //   return
    //   // }
    //
    // }

  }
  greetCustomer(name,  isTrue){
    let greet = (isTrue === true) ? `Good morning, ${name}!` : `Hello, ${name}!`

      return greet;
  //return `Hello, ${name}!`
  }

}

module.exports = Chef;

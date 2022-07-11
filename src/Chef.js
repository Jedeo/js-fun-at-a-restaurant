class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;


  }
  greetCustomer(name,  isTrue){
    let greet = (isTrue === true) ? `Good morning, ${name}!` : `Hello, ${name}!`

      return greet;
  //return `Hello, ${name}!`
  }

  checkForFood(foodItem){

    if(this.name === 'Scott'){
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
    return `Yes, we're serving ${foodItem.name} today!`;

  }




}

module.exports = Chef;

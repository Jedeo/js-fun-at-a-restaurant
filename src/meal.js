function nameMenuItem(nameOffood) {
  return `Delicious ${nameOffood}`
}


function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }

  return menuItem;

}

function addIngredients(nameOfIngredient,ingredients){
  for (let element of ingredients)
    if(element === nameOfIngredient){
      return null;
    }
  return ingredients.push(nameOfIngredient);
}

function formatPrice(foodPrice){

  return "$" + foodPrice;

}

function decreasePrice(foodPrice){

  return foodPrice - (foodPrice / 10) ;
}


function createRecipe(title, ingredients, type){
  let recipe = {
    title: title,
    ingredients:ingredients,
    type: type
  }
  return recipe;

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

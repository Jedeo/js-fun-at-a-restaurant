
function createRestaurant(name) {
  var newStore = {
    name: name,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[]

    }
  }
  return newStore;
}

function addMenuItem(pizzaRestaurant,newItem) {
  if(!pizzaRestaurant.menus[newItem.type].includes(newItem)) {
    pizzaRestaurant.menus[newItem.type].push(newItem)
    return pizzaRestaurant;
  }
}

// function removeMenuItem(menuToEdit, nameOfMenu, itemToRemove){
function removeMenuItem(restaurant, nameToRemove, typeOfMenu){
    let lengthOfMenu = restaurant.menus[typeOfMenu].length;
    for(let i = 0; i < lengthOfMenu; i++){
      if(restaurant.menus[typeOfMenu][i].name === nameToRemove){
        restaurant.menus[typeOfMenu].splice([i], 1);
        return `No one is eating our ${nameToRemove} - it has been removed from the ${typeOfMenu} menu!`;
      }
    }
    return `Sorry, we don't sell ${nameToRemove}, try adding a new recipe!`;
 }
module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}

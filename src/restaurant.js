
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

    let myIndex = restaurant.menus[typeOfMenu][0];
    //console.log(Object.values(restaurant.menus[typeOfMenu][0]));


    let lenthOfMenu = Object.values(restaurant.menus[typeOfMenu]).length;


    //console.log("DEBUG My INDEX");
    //console.log(myIndex);

    for(let i = 0; i <= lenthOfMenu; i++){
      console.log([i], restaurant.menus[typeOfMenu][i].name);
      if(Object.values(restaurant.menus[typeOfMenu])[i].name === nameToRemove){
         //myIndex = restaurant.menus[typeOfMenu].indexOf(nameToRemove);
        restaurant.menus[typeOfMenu].splice([i], 1);
        //console.log(restaurant.menus);
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

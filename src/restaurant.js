
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
function removeMenuItem(menuToEdit, name, type){
  var breakfastMenu = menuToEdit.menus["breakfast"];
  //console.log(breakfastMenu);
  breakfastMenu = [];
  console.log(menuToEdit);
}

  //for in loop to look into the Object
  //check for the item we want to remove useing an if statement
  //remove items
  //print the string and interpolation
//  console.log(menuToEdit.menus[whereToRemoveItem] );
  // for (let i = 0; i < menuToEdit.length; i++){
  //   if(!menuToEdit.menus){
  //     return menuToEdit;
  //   }else {
  //     return "else" + [];
  //   }
  // }
  // if(menuToEdit.menus.whereToRemoveItem) {
  //
  // }

//   if(!menuToEdit.menus[itemToRemove]){
//     return menuToEdit.menus[itemToRemove]
//   }else {
//     return menuToEdit.menus[itemToRemove] = [] + "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!";
//   }
// }


module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}

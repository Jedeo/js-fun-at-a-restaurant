function takeOrder(newOrder, deliveryOrders) {

  for (var i = 3; i > deliveryOrders.length; i--) {
    deliveryOrders.push(newOrder)
    return deliveryOrders;
  }

}

function refundOrder(number, deliveryOrders){
  for (let i = 0; i < deliveryOrders.length; i++ ){
    if(deliveryOrders[i].orderNumber === number ){
      deliveryOrders.splice([i], 1);
      return deliveryOrders
    }
  }
}


function listItems(deliveryOrders) {
  //look in the list
  //look at the key of items
  //log keys names of items
  let items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(", ");

}

function searchOrder(deliveryOrders, orderItem){
  for(let i = 0; i < deliveryOrders.length; i++)
    if(deliveryOrders[i].item === orderItem){
      return true;
    }
  return false;

  }






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

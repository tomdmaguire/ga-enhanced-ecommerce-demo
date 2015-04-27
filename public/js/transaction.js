// Generate a fake transaciton id
generateTransactionId = function () {
  var date = new Date();
  return date.getMonth() + date.getDate () + date.getHours() + date.getMinutes();
};

ga('ec:addProduct', {
  'id': 'product-bacon-jam',
  'name': 'Bacon Jam',
  'category': 'Food/Drink',
  'price': '3.00',
  'quantity': 2
});

ga('ec:addProduct', {
  'id': 'product-t-shirt',
  'name': 'T-Shirt',
  'category': 'Merch',
  'price': '12.99',
  'quantity': 1
});

ga('ec:setAction', 'purchase', {
  'id': generateTransactionId(),
  'affiliation': 'Nerd Burger Store',
  'revenue': '18.99',
  'shipping': '4.00'
});

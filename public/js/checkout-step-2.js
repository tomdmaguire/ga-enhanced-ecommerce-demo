ga('set', '&cu', 'GBP');

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

ga('ec:setAction','checkout', {
    'step': 2
});

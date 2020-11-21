chooseToppings()
.then(function(toppings) {
    return placeOrder(toppings);
})
.then(function(order) {
    return collectOrder(order);
})
.then(function(pizza) {
    eatPizza(pizza);
})
.catch(failureCallback);

// Same as:

chooseToppings()
.then(toppings => 
    placeOrder(toppings)
)
.then(order =>
    collectOrder(order)
)
.then(pizza =>
    eatPizza(pizza)
)
.catch(failureCallback);

// Also same:

chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);

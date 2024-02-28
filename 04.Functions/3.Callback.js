/*
 * Author: Marc Ciruelos Santos
 * Date: 22-02-2024
 * Description: Callaback => Example of callback
 */


// Normal use
function greeting(name) {
  console.log("Hello", name);
}

greeting("Marc");

// Callback
function callback() {
  console.log("I am a callback");
}

function message(fn) {
  fn();
}

message(callback);

//------------//
// Real Example
const products = ["Apple", "Bannanas", "Onion", "Avocado"];
let productList = [];

// Function with callback
function addToList(product, callback) {
  productList.push(product);
  callback(product + " added to the list.");
}

// Arrow function with callback
const addToListArrow = (product, callback) => {
  productList.push(product);
  callback(product + " added to the list.");
};

// Add Apple to List
addToList(products[0], function (result) {
  console.log(result);
});
addToListArrow(products[1], function (result) {
  console.log(result);
});

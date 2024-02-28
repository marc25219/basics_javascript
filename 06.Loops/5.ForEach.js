/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: forEach loop => It iterates all array items [normal, arrow function]
 */


const myArray = ["Blue", "Red", "Green", "Black"];

// Old mode
myArray.forEach(function (item, index) {
  console.log(`Item: ${item}, index: ${index}`);
});

// New mode (arrow function)
myArray.forEach((item, index) => {
  console.log(`Item: ${item}, index: ${index}`);
});
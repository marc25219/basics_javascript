/*
 * Author: Marc Ciruelos Santos
 * Date: 02-03-2024
 * Description: Closure => Example 3: Addition
 */

function addition(a) {
  return function updateTotal(b) {
    return `Total: ${a + b}`;
  };
}

// Example 1
console.log(addition(5)(5)); // total = 10
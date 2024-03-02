/*
 * Author: Marc Ciruelos Santos
 * Date: 02-03-2024
 * Description: Functions => Example of anonymouse function
 */

// /!\ The anonymouse function doesn't follow the hoisting (declaration first, then call it).

const anonymouseFunction = function(name = "byDefault") {
  return `Hello ${name}!`;
  // return "Hello" + name + "!"; --> Classic/old mode.
}

console.log(anonymouseFunction("Marc"));
console.log(anonymouseFunction()); // --> byDefault

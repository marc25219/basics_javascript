/*
 * Author: Marc Ciruelos Santos
 * Date: 13-02-2024
 * Description: Functions => Example returning a hello message.
 */

///!\ The "normal" function follows the hoisting (declaration or call first).
console.log(greeting("Marc"));
console.log(greeting()); // --> byDefault

function greeting(name = "byDefault") {
  return `Hello ${name}!`;
  // return "Hello" + name + "!"; --> Classic/old mode.
}

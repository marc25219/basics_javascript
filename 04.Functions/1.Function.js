/*
 * Author: Marc Ciruelos Santos
 * Date: 13-02-2024
 * Description: Functions => Example returning a hello message.
 */


function greeting(name = "byDefault") {
  return `Hello ${name}!`;
  // return "Hello" + name + "!"; --> Classic/old mode.
}

console.log(greeting("Marc"));
console.log(greeting()); // --> byDefault

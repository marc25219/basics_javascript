/*
 * Author: Marc Ciruelos Santos
 * Date: 13-02-2024
 * Description: Functions => Example returning a hello message using an arrow function
 */


greeting((name = "ByDefault") => `Hello ${name}!`);
console.log(greeting("Marc"));
console.log(greeting()); // --> byDefault
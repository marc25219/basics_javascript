/*
 * Author: Marc Ciruelos Santos
 * Date: 10-02-2024
 * Description: Logical operators => AND, OR
 */


// Operators: AND, OR
// AND
console.log("True ==> " + (true && true && true));
console.log("False ==> " + (false && true && true));

// 0 and 1 as logical operators
console.log("True ==> " + (0 == false));
console.log("True ==> " + (1 == true));
console.log("0 // False ==> " + (0 && true));
console.log("1 // False ==> " + (1 && false));

// Last assignation text (defined)
console.log('Returns last element "Hello" ==> ' + (1 && "Hello"));

// OR
console.log("True ==> " + (true || false || false));
console.log("False ==> " + (false || false || false));

// Last assignation text (undefined). If first is undefined, assign the second one (defined).
const text = undefined;
const name = text || "Marc";
console.log(name);

/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: String class => Examples of the Declaration, functions (charCodeAt, indexOf, subtring) and conversions.
 */


// Declarartion
let myString = "javascript";
console.log(myString);

myString = new String("javascript");
console.log(myString);

// Functions
console.log("String by position: " + myString[2]);
console.log("Unicode value by position: " + myString.charCodeAt(2));
console.log("Start position by text: " + myString.indexOf("script"));
console.log("Substring: " + myString.substring(2, 4));

// Conversions
// Number to String
let number = 266;
console.log("Number to String: " + number.toString());
console.log("Number to Binary and String: " + number.toString(2));
console.log("Number to HEX and String: " + number.toString(16));

// Date to String
const date = new Date();
console.log("## Getting the current hour with split(): ");
console.log(date.toString());
console.log(date.toString().split(" "));
console.log(date.toString().split(" ")[4]);
console.log(date.toString().split(" ")[4].split(":"));
console.log(date.toString().split(" ")[4].split(":")[0]);

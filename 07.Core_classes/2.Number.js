/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: Number class => Examples of the types, declaration, conversions and Math class.
 */


// Types
console.log("Integer:" + 25);
console.log("Decimal:" + 25.5);
console.log("Hexadecimal:" + 0x1f);
console.log("Floating point:" + 5.4e2);
console.log("Infinity:" + 1 / 0);
console.log("-Infinity:" + -1 / 0);
console.log("NaN:" + "a" / 15);

// Declarartion
let number = 5;
let number1 = new Number(5);

// Conversion to Number
let stringToNumber = parseInt("15");
console.log(stringToNumber);

let stringToBinaryNumber = parseInt("15", 2);
console.log(stringToBinaryNumber);

let stringToFloat = parseFloat("5e3");
console.log(stringToFloat);

let roundNumber = (3.14159265359).toFixed(2);
console.log(roundNumber);

let roundNumberToInteger = (3.14159265359).toFixed(0);
console.log(roundNumberToInteger);

let roundNumberToExponential = (3.14159265359).toExponential(2);
console.log(roundNumberToExponential);

// Class Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random());
console.log(Math.log10(1));
console.log(Math.pow(2, 3));
console.log(2 ** 3);
console.log(Math.min(5, 6, 7));

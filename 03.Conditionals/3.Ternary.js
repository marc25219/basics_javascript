/*
 * Author: Marc Ciruelos Santos
 * Date: 13-02-2024
 * Description: Ternary operation => Example using a VIP-MEMBER example.
 */


function getFinalPrice(isVIP) {
  return isVIP ? "$2.00" : "$10.00";
}

// Expected output: "$2.00"
console.log(getFinalPrice(true));

// Expected output: "$10.00"
console.log(getFinalPrice(false));

// Expected output: "$10.00"
console.log(getFinalPrice(null));
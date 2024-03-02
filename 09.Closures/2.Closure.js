/*
 * Author: Marc Ciruelos Santos
 * Date: 02-03-2024
 * Description: Closure => Example 2: Sale (getAmount, updateTotal)
 */

function Sale(initialAmount) {
  let total = 0;
  
  function updateTotal(amount) {
    total += amount;
    return `Total: ${total}`;
  };

  function getAmount(amount) {
    return `Amount: ${amount}`;
  };

  return { total: updateTotal, amount: getAmount };
}

// Example 1
let sale = new Sale(5);

  // Total
  console.log(sale.total(10)); // total = 15
  console.log(sale.total(20)); // total = 35
  console.log(sale.total(15)); // total = 50

  // Amount
  console.log(sale.amount(10)); // amount = 10

// Example 2
  
  // Total
  console.log(Sale(44).total(30)); // total = 30

  // Amount
  console.log(Sale(44).amount(17)); // amount = 17
/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Closure => Example of counter closure (increment, decrement and value)
 */


const myCounter = (function () {
  let _counter = 0;

  function increment() {
    return ++_counter;
  }

  function decrement() {
    return --_counter;
  }

  function value() {
    return _counter;
  }

  return {
    increment,
    decrement,
    value,
  };
})();

console.log(myCounter.value()); // counter = 0
console.log(myCounter.increment()); // counter = 1
console.log(myCounter.value()); // counter = 1
console.log(myCounter.increment()); // counter = 2
console.log(myCounter.value()); // counter = 2
console.log(myCounter.decrement()); // counter = 1
console.log(myCounter.value()); // counter = 1

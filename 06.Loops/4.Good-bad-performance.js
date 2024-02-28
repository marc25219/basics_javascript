/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: Loop time comparison => Example of how to reduce the access time of a bucle.
 */


const obj = {
  unArray: new Array(10000000),
};

function badPerformance() {
  console.time("Bad");
  for (let i = 0; i < obj.unArray.length; i++) {
    obj.unArray[i] = "Hola";
  }
  console.timeEnd("Bad");
}

function goodPerformance() {
  console.time("Good");
  let unArray = obj.unArray;
  for (let i = 0, len = unArray.length; i < len; i++) {
    unArray[i] = "Hola";
  }
  console.timeEnd("Good");
}

badPerformance(); // 60.095947265625 ms
goodPerformance(); // 86.183837890625 ms
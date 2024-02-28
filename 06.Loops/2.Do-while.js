/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: Do-While loop => Example of an increment 0 to 10
 */


function loopDoWhile(num) {
  let i = 0;

  do {
    console.log(i);
    i++;
  } while (i < num);
}

loopDoWhile(11);
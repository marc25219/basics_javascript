/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: forEach loop => It iterates the object attributtes [normal, arrow function]
 */


const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  release: "11-07-1960",
};

// 1. forEach using Object methods
const properties = Object.getOwnPropertyNames(book);

properties.forEach((name) => {
  let value = Object.getOwnPropertyDescriptor(book, name).value;
  console.log(`1. The property "${name}" contains "${value}"`);
});

// 2. for (key in object)
for (property in book) {
  console.log(`2. The property "${property}" contains "${book[property]}"`);
}
/*
 * Author: Marc Ciruelos Santos
 * Date: 02-03-2024
 * Description: Object to Array => Use of Object.keys(), Object.values() and Object.entries()
 */

const book = {
  id: 1,
  title: "Thinking, fast and slow",
  author: "Daniel Kahneman",
  price: 12.5,
  format: "paperback",
  genres: ["Education", "Psychology"],
  pages: 731,
};

// Object.keys()
const properties = Object.keys(book);

console.log(properties.length); // 7

properties.forEach((property) => {
  // id, title, author...
  console.log("Object.keys(): " + property);
});

// Object.values()
const values = Object.values(book);

values.forEach((value) => {
  // 1, "Thinking, fast and slow", ..., ["Education", "Psychology"]...
  console.log("Object.values(): " + value);
});

// Object.entries() => returns a bidimensional array (key, value)
const entries = Object.entries(book);

console.log("");
console.log("Object.entries(): ");

entries.forEach((entry) => {
  // ['id', 1], ['title', 'Thinking, fast and slow']
  console.log(entry);
});
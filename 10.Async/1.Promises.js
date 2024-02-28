/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Promise => Example of a promise management.
 */


const books = [
  {
    id: 1,
    title: "Thinking, fast and slow",
    author: "Daniel Kahneman",
    price: 12.5,
    format: "paperback",
    genres: ["Education", "Psychology"],
  },
  {
    id: 2,
    title: "Deep work. Rules for focused success in a distracted world",
    author: "Cal Newport",
    price: 25.69,
    format: "hardcover",
    genres: ["Education", "Business"],
  },
  {
    id: 3,
    title: "Rules for life: An antidote to chaos",
    author: "Jordan B. Peterson",
    price: 12.86,
    format: "paperback",
    genres: ["Business", "Study Skills"],
  },
];

// Example usual function
const getBooksNoDelayed = () => {
  return books;
};

console.log(getBooksNoDelayed());

// Async - Delay forced (1500)
const getBooks = () => {
  setTimeout(() => {
    return books;
  }, 1500);
};

console.log(getBooks()); // Undefined

// Async - Delay forced (1500)
const getBooksAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books);
    }, 1500);
  });
};

// [object Promise]
console.log(getBooksAsync());

// Data
console.log(
  getBooksAsync()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {})
);

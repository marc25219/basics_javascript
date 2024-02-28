/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Array filter() => Examples using the filter() function with an objects array.
 */


const books = [
  {
    id: 1,
    title: "Thinking, fast and slow",
    author: "Daniel Kahneman",
    price: 12.5,
    format: "paperback",
    genres: ["Education", "Psychology"],
    pages: 731,
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

// Filter() --> Filters the array using a criterion. Moreover, returns the complete object.

// Create a new array with the books with price greater than 12.50
console.log(books.filter((book) => book.price > 12.5));

// Create a new array with the books with the pages !== undefined using nullish coalescing
console.log(books.filter((book) => book?.pages));

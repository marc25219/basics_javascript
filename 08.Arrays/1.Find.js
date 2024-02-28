/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Array find() => Examples using the find() function with an objects array.
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

// Find() --> Find something

// Book with title "Thinking, fast and slow"
console.log(books.find((book) => book.title === "Thinking, fast and slow"));

// Book with id === 2
console.log(books.find((book) => book.id === 2));

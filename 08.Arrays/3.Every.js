/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Array every() => Examples using the every() function with an objects array.
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
    genres: ["Education", "Business", "Psychology"],
  },
  {
    id: 3,
    title: "Rules for life: An antidote to chaos",
    author: "Jordan B. Peterson",
    price: 12.86,
    format: "paperback",
    genres: ["Business", "Study Skills", "Psychology"],
  },
];

// Every() --> Does each of the.... have the ....?

// Does each of the books have the title "Thinking, fast and slow"  ==> false
console.log(books.every((book) => book.title === "Thinking, fast and slow"));

// Some () + includes()
// Does each of the books have the "included tags "Business"  ==> false
console.log(books.every((book) => book.genres.includes("Business")));

// Does each of the books have the "included tags "Business"  ==> true
console.log(books.every((book) => book.genres.includes("Psychology")));

/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Array some() => Examples using the some() function with an objects array.
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

// Some() --> Is there any ....?
// Is there any "Book with title "Thinking, fast and slow"  ==> true
console.log(books.some((book) => book.title === "Thinking, fast and slow"));

// Is there any "Book with id === 4"    ==> false
console.log(books.some((book) => book.id === 4));

// Some () + includes()
// Is there any "Book(s) with the included tags "Business"  ==> true
console.log(books.some((book) => book.genres.includes("Business")));

// Is there any "Book(s) with the included tags "Mistery"  ==> false
console.log(books.some((book) => book.genres.includes("Love")));

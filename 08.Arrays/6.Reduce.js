/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Array reduce() => Examples using the reduce() function with an objects array.
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

// Reduce() --> Creates a new array with a criterion

// Create a new array with the books genres
console.log(
  books.reduce((allGenres, book) => {
    return [...allGenres, ...book.genres];
  }, [])
);

// Remove repeated genres
console.log(
  books.reduce((allGenres, book) => {
    return Array.from(new Set([...allGenres, ...book.genres]));
  }, [])
);

// Alternative: filter
console
  .log(
    books.reduce((allGenres, book) => {
      return [...allGenres, ...book.genres];
    }, [])
  )
  .filter((book, index, self) => index === self.indexOf(book));

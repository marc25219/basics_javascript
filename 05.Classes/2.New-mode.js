/*
 * Author: Marc Ciruelos Santos
 * Date: 17-02-2024
 * Description: Create an Inventory Class => Example using the new mode (Object.method)
 */


// Class
class Inventory {
  constructor(name) {
    this.name = name;
    this.articles = [];
  }

  // Methods
  getName() {
    return this.name;
  }

  add(item, quantity) {
    return (this.articles[item] = quantity);
  }

  quantity(item) {
    return this.articles[item];
  }
}

// Create objects and play with methods
let books = new Inventory("books");

const myBook = {
  title: "My new book",
  quantity: 5,
};

console.log(books.getName());
console.log(books.add(myBook.title, myBook.quantity));
console.log(books.quantity(myBook.title));

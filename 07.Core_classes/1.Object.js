/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: Objects => It manages objects (access, modify, comparison, optional chaining, destructuring, etc)
 */

const book = {
  title: "It",
  author: "Stephen King",
  pages: "250",
  price: 17.95,
  read: function () {
    console.log("Reading a book: " + this.title);
  },
};

// Show atributtes (object and array access)
console.log(book.title);
console.log(book["title"]);

// Modify attribute values
console.log(book.price);
const discount10 = 0.9;
book.price *= 0.9;
console.log(book.price);

// Dinamyc attribute access
let nameAuthor = "author";
console.log(book[nameAuthor]); // it works
console.log(book.nameAuthor); // it not works (undefined)

// Use functions in the object
book.read();

// Create a new objects
// (1)
let car = {};
car.brand = "Mercedes";
console.log(car.brand);

// (2)
let house = new Object({ address: "Fake street, 123" });
console.log(house.address);

// Nested attributes
let computer = {
  brand: "Dell",
  hardware: {
    cpu: "Intel i7",
    gpu: "Nvidia RTX 4090",
  },
  webCam: undefined,
};

console.log(computer.hardware.cpu);
console.log(computer["hardware"]["cpu"]);

// Comparison between objects
const car1 = { brand: "Tesla", model: "X" };
const car2 = { brand: "Tesla", model: "X" };

console.log(car1 === car2); // false
console.log(car1.brand === car2.brand); // true

const car3 = car1;
console.log(car3 === car1); // true

// Optional Chaining
// Existing examples
console.log(computer.brand); // true
console.log("brand" in computer); // true

// Not existing or undefined
// Uncaught TypeError --> console.log(computer.price)
console.log("webCam" in computer); // true, but it's undefined =(

// Solution
console.log(computer?.brand); // Dell
console.log(computer?.webCam); // undefined


// Destructuring => Direct to the property
// xx -> const brand = computer.brand

const { brand } = computer; 
const { hardware } = computer; 
const { gpu } = computer.hardware; 

console.log(brand)
console.log(hardware)
console.log(gpu)


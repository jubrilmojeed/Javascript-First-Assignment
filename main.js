//Creating an empty array named library
let library = [];

// Add Books to the Library
library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true });
library.push({ title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true });
library.push({ title: "1984", author: "George Orwell", yearPublished: 1949, available: false });
library.push({ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true });
console.log(library);

// Update the Availability of a Book
library[2].available = true;
console.log(library);

// Remove a Book from the Library
library.splice(3, 1);
console.log(library);

// Check if a Book is in the Library
let hasGreatGatsby = library.some(book => book.title === "The Great Gatsby");
console.log(hasGreatGatsby);

// Borrow the First Book
let firstAvailableBookIndex = library.findIndex(book => book.available === true);
if (firstAvailableBookIndex !== -1) {
    library[firstAvailableBookIndex].available = false;
    let borrowedBook = library.splice(firstAvailableBookIndex, 1)[0];
    console.log(borrowedBook);
}
console.log(library);

// Add a New Book to the Start of the Library
library.unshift({ title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true });
console.log(library);

// Get a List of All Book Titles
let bookTitles = library.map(book => book.title).join(", ");
console.log(bookTitles);

// Create a New Library Section
let newArrivals = library.slice(-2);
console.log(newArrivals);

// books.js

// Constructor function for Book
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Adding a prototype method to get book summary
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Create and export an array of Book instances
const books = [
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("The Alchemist", "Paulo Coelho", 1988)
];

export { Book, books };

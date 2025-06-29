const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook({ title, author, year }) {
    if (!title || !author || !year) {
      console.log("Book information is incomplete. Please provide title, author, and year.");
      return;
    }

    
    if (this.findBookByTitle(title)) {
      console.log(`Book titled "${title}" already exists.`);
      return;
    }

    this.books.push({ title, author, year });
    console.log(`Book titled "${title}" added successfully.`);
  },

  
  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`Book titled "${removed[0].title}" removed successfully.`);
    } else {
      console.log("Book not found.");
    }
  }
};

// Testing the system


library.addBook({ author: "George Orwell", year: 1949 });


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });


console.log("Total books in library:", library.books.length);


library.removeBook("1984");


library.removeBook("Unknown Book");


console.log("Current library:", library.books);

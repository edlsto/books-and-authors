var Book = require('./book.js');

class Author {
  constructor(authorDetails) {
    this.first = authorDetails.first;
    this.last = authorDetails.last;
    this.books = [];
  }

  write() {
    var newBook = new Book('Isabel', 'Allende', 'The House of the Spirits', 'April 12, 1985');
    this.books.push(newBook);
    return newBook;
  }
}

module.exports = Author;

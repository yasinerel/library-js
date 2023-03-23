let myLibrary = [];

function Book(name, author, page, read) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  const newBook = new Book('yasin', 'erel', 69, true);
  myLibrary.push(newBook);
}

addBookToLibrary();
console.log("deneme");
console.log(myLibrary);

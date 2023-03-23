/*let myLibrary = [];

function Book(name, author, page, read) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book('yasin', 'erel', 69, true);
  myLibrary.push(newBook);
}

addBookToLibrary();
console.log("deneme");
console.log(myLibrary);*/


let myLibrary = [];

function Book(name, author, page, read) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  const name = document.getElementById("bookName").value;
  const author = document.getElementById("authorName").value;
  const page = document.getElementById("pageNumber").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(name, author, page, read);
  myLibrary.push(newBook);

  console.log(myLibrary);
}


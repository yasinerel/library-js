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

  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const titleElement = document.createElement('h2');
    titleElement.textContent = book.name;
    bookElement.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = 'Author: ' + book.author;
    bookElement.appendChild(authorElement);

    const pageElement = document.createElement('p');
    pageElement.textContent = 'Page Number: ' + book.page;
    bookElement.appendChild(pageElement);

    const readElement = document.createElement('p');
    readElement.textContent = 'Read: ' + book.read;
    bookElement.appendChild(readElement);

    libraryContainer.appendChild(bookElement);
  }
}





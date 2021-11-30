const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookIsbn = document.querySelector('#isbn');
const bookForm = document.querySelector('#book-form');
const bookList = document.querySelector('#book-list');
const container = document.querySelector('.container');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    bookTitle.value !== '' &&
    bookAuthor.value !== '' &&
    bookIsbn.value !== ''
  ) {
    if (
      bookTitle.value.length >= 3 &&
      bookAuthor.value.length >= 3 &&
      typeof +bookIsbn.value === 'number' &&
      +bookIsbn.value.length === 13
    ) {
      const bookItem = document.createElement('tr');
      bookItem.innerHTML = `<tr>
            <td>${bookTitle.value}</td>
            <td>${bookAuthor.value}</td>
            <td>${bookIsbn.value}</td>
            <td><a href="#" class="delete">X</a></td>
          </tr>`;
      console.log(bookIsbn.value.length);
      bookList.append(bookItem);
      bookTitle.value = '';
      bookAuthor.value = '';
      bookIsbn.value = '';

      showAlert('success', 'Book added to the list.');
    } else {
      showAlert('error', 'All fields require the proper information');
    }
  } else {
    showAlert('error', 'All fields are required!!!');
  }
});

bookList.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    e.target.parentElement.parentElement.remove();
    showAlert('error', 'Book Removed!!!');
  }
});

function showAlert(status, msg) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${status}`;
  alertDiv.innerText = msg;
  container.insertBefore(alertDiv, bookForm);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2000);
}

//console.log(bookForm);

'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    var strHtml = `
    <section><button class="create-new-book-btn" onclick="onAddBook()">Create new book</button></section>
        <table>
            <thead>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Actions</td>
            </thead>
            <tbody>
    `
    var tbodyHtml = books.map(book => `
                <tr>
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.price}</td>
                    <td>
                        <button class="read">Read</button>
                        <button class="update">Update</button>
                        <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
                    </td>
                </tr>
    `).join('')
    strHtml += tbodyHtml
    strHtml += `
            </tbody>
        </table>
    `

    document.querySelector('.books-container').innerHTML = strHtml
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    console.log('book removed!')
    renderBooks()
    //consider adding flashMsg(``) notifying the user the book has been removed
}

function onAddBook() {
    var title = prompt('Enter book title')
    if(!title) return
    var price = +prompt('Enter book price')
    if(!price) return

    const book = addBook(title, price) // need this const for later to add the flashMsg
    renderBooks()
 }

function onUpdateBook(bookId) { }

function onReadBook(bookId) { }
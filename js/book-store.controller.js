'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    var strHtml = `
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
                        <button class="delete">Delete</button>
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

function onRemoveBook(bookId) { }

function onAddBook() { }

function onUpdateBook(bookId) { }

function onReadBook(bookId) { }
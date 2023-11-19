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
                        <button class="read" onclick="onReadBook('${book.id}')">Read</button>
                        <button class="update" onclick ="onUpdateBook('${book.id}')">Update</button>
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

    flashMsg(`Book removed`)
}

function onAddBook() {
    var title = prompt('Enter book title')
    if (!title) return
    var price = +prompt('Enter book price')
    if (!price) return

    const book = addBook(title, price) // need this const for later to add the flashMsg
    renderBooks()

    flashMsg(`New book created!\nTitle:${book.title}\nPrice:${book.price}`)

}

function onUpdateBook(bookId) {
    const book = getBookById(bookId)

    var newPrice = +prompt('Enter book price', book.price)
    if (!newPrice || book.price === newPrice) return

    const updatedBook = updateBook(bookId, newPrice)
    renderBooks()

    flashMsg(`Price updated to: ${updatedBook.price}`)
}

function onReadBook(bookId) {
    const book = getBookById(bookId)
    const elModal = document.querySelector('.modal')

    document.querySelector('.book-id').innerText = book.id
    document.querySelector('.book-title').innerText = book.title
    document.querySelector('.book-price').innerText = book.price

    elModal.classList.add('open')
}

function flashMsg(msg) {
    const elUserMsg = document.querySelector('.user-msg')

    elUserMsg.innerText = msg
    elUserMsg.classList.add('open')
    setTimeout(() => elUserMsg.classList.remove('open'), 5000)
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}
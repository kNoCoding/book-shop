'use strict'

const STORAGE_KEY = 'bookDB'

var gBooks

_createBooks()

function getBooks() {
    var books = gBooks
    return books
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => bookId === book.id)
    gBooks.splice(bookIdx, 1)

    _saveBooksToStorage()
}

function addBook(title, price) {
    const book = _createBook(title, price)
    gBooks.unshift(book)

    _saveBooksToStorage()
    return book
}

function getBookById(bookId) {
    return gBooks.find(book => bookId === book.id)
}

function updateBook(bookId, newPrice) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = newPrice

    _saveBooksToStorage()
    return book
}

function setBookFilter(filterBy) { }

function setBookSort(sortBy) { }



// private functions

function _createBook(title = 'Nice Book', price = 50) {
    return {
        id: makeId(4),
        title,
        price,
        // imgUrl, // put a default there in the near future and add as parameter to the function
    }
}

function _createBooks() {
    gBooks = loadFromStorage(STORAGE_KEY)
    //if gBooks exists and isnt empty dont populate with demo data
    if (gBooks && gBooks.length) return

    gBooks = [
        _createBook('Learning Laravel', 18.90),
        _createBook('Beginning with Laravel', 6.65),
        _createBook('Java for developers', 7.20),
    ]

    _saveBooksToStorage()
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
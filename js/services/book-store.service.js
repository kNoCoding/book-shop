'use strict'

const STORAGE_KEY = 'bookDB'

var gBooks

function getBooks() {
    var books = gBooks // add filtering here in the near future
    return books
}

function removeBook() { }

function addBook() { }

function getBookById() { }

function updateBook() { }

function setBookFilter(filterBy) { }

function setBookSort(sortBy) { }



// private functions

function _createBook(title, price) {
    return {
        id: makeId(4),
        title,
        price,
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
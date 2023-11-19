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

function _createBook() { }

function _createBooks() { }

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
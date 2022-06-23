// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
  res.render('book/details', {title: 'Add Book', book: ''})

    /*****************
     * ADD CODE HERE *
     *****************/

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
  let newBook = book(
    {
      "Title": req.body.title,
      "Description": req.body.description,
      "Author": req.body.author,
      "Genre": req.body.genre,
      "Price": req.body.price
    }
  )

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
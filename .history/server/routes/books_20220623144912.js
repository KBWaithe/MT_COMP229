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
        title: 'bookCollection',
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
      "Author": req.body.author,
      "Description": req.body.description,
      "Genre": req.body.genre,
      "Price": req.body.price
    });

    book.create(newBook, (err, book) =>
    {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/bookCollection');
      }
    }
  )

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  book.findById(id, (err, editBook) =>
  {
    if(err)
  {
    console.log(err);
    res.end(err);
  }
      else
    {
      res.render('books/details', {title: 'Edit Book', book: editBook})
    }
  })

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

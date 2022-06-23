/* 
File Name: 
Author's Name: Kristian Waithe
Student ID: 300637474
Web App Name: Midterm > Personal Portfolio - My Favourite Books   
*/

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
    else
    {
      res.render('books/index', {
        title: 'bookCollection',
        books: books
      });
    }
  });

});

    /*****************
     *      2 A      *
     *****************/

//  GET the Book Details page in order to add a new Book
router.get('/details/add', (req, res, next) => {
  res.render('books/details', {title: 'Add Book', book: ''})

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/details/add', (req, res, next) => {
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
     *      2 B      *
     *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  book.findById(id, (err, bookEdit) =>
  {
    if(err)
  {
    console.log(err);
    res.end(err);
  }
      else
    {
      res.render('books/details', {title: 'Edit Book', book: bookEdit})
    }
  })

    /*****************
     *      2 C      *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

  let id = req.params.id
  let bookUpdate = book({
    "_id": id,
    "Title": req.body.title,
    "Author": req.body.author,
    "Description": req.body.description,
    "Genre": req.body.genre,
    "Price": req.body.price
  });

  book.updateOne({_id: id}, bookUpdate, (err) => 
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
  });

    /*****************
     *      2 D      *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  book.remove({_id: id}, (err) => 
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
  });

    /*****************
     *      2 E      *
     *****************/
});


module.exports = router;

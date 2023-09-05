const express = require('express')
const router = express.Router();
const bookModel = require('../model/bookModel');

router.get('/', async (req, res, next) => {
    const findAll = await bookModel.find();
    return res.render('books/index', {books : findAll});
})

router.get('/create', (req, res, next) => {
    return res.render('books/create');
})

router.post('/create', async function(req, res, next){ //non-lambda
    let body = req.body;
    let createBook = new bookModel({
        title : body.title,
        price : body.price
    })
    await createBook.save(); //save to schema
    return res.redirect('/books')
})

module.exports = router;
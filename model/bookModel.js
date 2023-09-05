const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title : String,
    price : Number
})

module.exports = mongoose.model('bookModel', bookSchema);
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  isbn: String,
  language: String,
  numPages: Number,
  publisher: String
});

module.exports = mongoose.model('Book', bookSchema);

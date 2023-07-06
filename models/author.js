const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  country: String,
  birthDate: Date
});

module.exports = mongoose.model('Author', authorSchema);

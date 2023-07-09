const Author = require('../models/author');

exports.createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    const savedAuthor = await author.save();
    res.json(savedAuthor);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the author' });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while retrieving the authors' });
  }
};

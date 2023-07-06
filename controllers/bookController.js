const Book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the book' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while retrieving the books' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the book' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the book' });
  }
};

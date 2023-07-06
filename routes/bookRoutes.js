const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.delete('/:id', bookController.deleteBook);
router.put('/:id', bookController.updateBook);

module.exports = router;

require('dotenv').config();
const express= require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3000;

const app = express()
app.use(bodyParser.json());


// Mongo connection 
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

// app.listen(port, () => {
//   console.log(`Library app is listening at http://localhost:${port}`)
// });

app.get('/', function (req, res) {
    res.json({"emre": "succeess"});
});

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

app.use(express.urlencoded({
  extended: true
}));

module.exports = app;


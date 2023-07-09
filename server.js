const express= require('express')
const connectDB = require('./database/connection');
require('dotenv').config();
const bodyParser = require('body-parser');

const port = 5000;
const app = express()

// Mongo connection
console.log("ookkkeeey");
connectDB();
console.log("DOneee");

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Library app is listening at http://localhost:${port}`)
});

app.get('/', function (req, res) {
    res.json({"emre": "succeess"});
});

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

app.use(express.urlencoded({
  extended: true
}));

module.exports = app;


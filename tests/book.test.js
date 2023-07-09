const request = require('supertest');
const connectDB = require('./../database/connection');
const mongoose = require('mongoose');
const Book = require('../models/book');
const Author = require('../models/author');

let app = require('../server');


// describe('Library API', () => {

//     beforeAll(async () => {
//         connectDB();

//     });

//     afterAll(async () => {
//         await mongoose.connection.close();
//     });

//   it('should add 3 books and 3 authors, update one book, retrieve all books, delete one book, and retrieve all books again', async () => {
//     // Add 3 authors
//     const author1 = await request(app)
//       .post('/api/authors')
//       .send({ name: 'Author 1', country: 'Country 1', birthDate: '1990-01-01' });

//     const author2 = await request(app)
//       .post('/api/authors')
//       .send({ name: 'Author 2', country: 'Country 2', birthDate: '1995-02-01' });

//     const author3 = await request(app)
//       .post('/api/authors')
//       .send({ name: 'Author 3', country: 'Country 3', birthDate: '1985-03-01' });

//     // Add 3 books
//     const book1 = await request(app)
//       .post('/api/books')
//       .send({
//         title: 'Book 1',
//         author: author1.body._id,
//         price: 9.99,
//         isbn: '1234567890',
//         language: 'English',
//         numPages: 200,
//         publisher: 'Publisher 1'
//       });

//     const book2 = await request(app)
//       .post('/api/books')
//       .send({
//         title: 'Book 2',
//         author: author2.body._id,
//         price: 14.99,
//         isbn: '0987654321',
//         language: 'French',
//         numPages: 300,
//         publisher: 'Publisher 2'
//       });

//     const book3 = await request(app)
//       .post('/api/books')
//       .send({
//         title: 'Book 3',
//         author: author3.body._id,
//         price: 19.99,
//         isbn: '5678901234',
//         language: 'German',
//         numPages: 250,
//         publisher: 'Publisher 3'
//       });

//     // Update book 1
//     const updatedBook = await request(app)
//       .put(`/api/books/${book1.body._id}`)
//       .send({ price: 111.99 });

//     expect(updatedBook.status).toBe(200);
//     expect(updatedBook.body.price).toBe(11.99);

//     // Retrieve all books
//     const allBooks = await request(app).get('/api/books');
//     expect(allBooks.status).toBe(200);
//     expect(allBooks.body).toHaveLength(3);

//     // Delete book 2
//     const deletedBook = await request(app).delete(`/api/books/${book2.body._id}`);
//     expect(deletedBook.status).toBe(200);
//     expect(deletedBook.body.message).toBe('Book deleted successfully');

//     // Retrieve all books again
//     const remainingBooks = await request(app).get('/api/books');
//     expect(remainingBooks.status).toBe(200);
//     expect(remainingBooks.body).toHaveLength(2);
//   },10000);
// });


beforeAll(async () => {
    connectDB();
    // Promise.all([Book.deleteMany(), Author.deleteMany()])
    //   .then(() => done())
    //     .catch((error) => done(error));
    // await Book.deleteMany();
    // await Author.deleteMany(); 
});

// afterAll(() => {
//     return mongoose.connection.close();
// });



describe('with thens', () => {
    
    it('should return all books', async () => {
            request(app).get('/api/books').then((response) => {
                expect(response.status).toBe(200);
            expect(response.body).toHaveLength(1);
            });
      })
  });



// describe('Library API', () => {
//     // beforeAll(() => {
//     //     connectDB();
//     // });

//     // afterAll(() => {
//     //     return mongoose.connection.close();
//     // });

//     it('should add 3 books and 3 authors, update one book, retrieve all books, delete one book, and retrieve all books again', (done) => {
//         let author1, author2, author3, book1, book2, book3;

//         request(app)
//             .post('/api/authors')
//             .send({ name: 'Author 1', country: 'Country 1', birthDate: '1990-01-01' })
//             .then((response) => {
//                 author1 = response.body._id;

//                 return request(app)
//                     .post('/api/authors')
//                     .send({ name: 'Author 2', country: 'Country 2', birthDate: '1995-02-01' });
//             })
//             .then((response) => {
//                 author2 = response.body._id;

//                 return request(app)
//                     .post('/api/authors')
//                     .send({ name: 'Author 3', country: 'Country 3', birthDate: '1985-03-01' });
//             })
//             .then((response) => {
//                 author3 = response.body._id;

//                 return request(app)
//                     .post('/api/books')
//                     .send({
//                         title: 'Book 1',
//                         author: author1,
//                         price: 9.99,
//                         isbn: '1234567890',
//                         language: 'English',
//                         numPages: 200,
//                         publisher: 'Publisher 1'
//                     });
//             })
//             .then((response) => {
//                 book1 = response.body._id;

//                 return request(app)
//                     .post('/api/books')
//                     .send({
//                         title: 'Book 2',
//                         author: author2,
//                         price: 14.99,
//                         isbn: '0987654321',
//                         language: 'French',
//                         numPages: 300,
//                         publisher: 'Publisher 2'
//                     });
//             })
//             .then((response) => {
//                 book2 = response.body._id;

//                 return request(app)
//                     .post('/api/books')
//                     .send({
//                         title: 'Book 3',
//                         author: author3,
//                         price: 19.99,
//                         isbn: '5678901234',
//                         language: 'German',
//                         numPages: 250,
//                         publisher: 'Publisher 3'
//                     });
//             })
//             .then((response) => {
//                 return request(app)
//                     .put(`/api/books/${book1}`)
//                     .send({ price: 111.99 });
//             })
//             .then((response) => {
//                 expect(response.status).toBe(200);
//                 expect(response.body.price).toBe(11.99);

//                 return request(app).get('/api/books');
//             })
//             .then((response) => {
//                 expect(response.status).toBe(200);
//                 expect(response.body).toHaveLength(3);

//                 return request(app).delete(`/api/books/${book2}`);
//             })
//             .then((response) => {
//                 expect(response.status).toBe(200);
//                 expect(response.body.message).toBe('Book deleted successfully');

//                 return request(app).get('/api/books');
//             })
//             .then((response) => {
//                 expect(response.status).toBe(200);
//                 expect(response.body).toHaveLength(2);

//                 done();
//             })
//             .catch((error) => {
//                 done(error);
//             });
//     }, 10000);
// });

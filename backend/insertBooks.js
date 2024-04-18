const mongoose = require('mongoose');
const BookModel = require('./models/booklist.model');
const booksData = require('./data/books.json');

mongoose.connect("mongodb+srv://Nicolas:Felixcoco4282.@cluster0.ht88ccg.mongodb.net/bookCollections");


const connection = mongoose.connection;

connection.once('open', async () => {
    try {
      // Insert each book from the JSON data into the database
      for (const bookData of booksData.books) {
        const { title, author, description } = bookData;
        const newBook = new BookModel({ title, author, description });
        await newBook.save();
        console.log(`Inserted book: ${title}`);
      }
  
      console.log('All books inserted successfully.');
      connection.close();
    } catch (error) {
      console.error('Error inserting books:', error);
      connection.close();
    }
  });
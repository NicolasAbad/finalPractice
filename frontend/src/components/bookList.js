import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar';

const BookCard = (props) => (
  <div class="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div  class="desc">
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>
      <p>{props.book.description}</p>
    </div>
    <button className="delete-btn" onClick={() => props.deleteBook(props.book._id)}>Delete</button>
    <button className="update-btn" onClick={() => props.updateBook(props.book._id)}>update</button>
  </div>
);

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://finalpractice-2.onrender.com/book') 
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList', err);
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete(`https://finalpractice-2.onrender.com/book/delete/${id}`)
      .then((response) => {
        console.log(response.data);
      });

    setBooks(books.filter((el) => el._id !== id));
  };

  const navigate = useNavigate();

const updateBook = (id) => {
  navigate(`/update/${id}`);
};
  const bookList =
    books.length === 0 ? (
      <p>There are no book records!</p>
    ) : (
      <div className="list">
        {books.map((book) => (
              <BookCard book={book} key={book._id} deleteBook={deleteBook} updateBook ={updateBook} />
        ))}
      </div>
    );

    return (
        <div className="BookList">
          <NavBar />
          <div className="list">{bookList}</div>
        </div>
      );
    }

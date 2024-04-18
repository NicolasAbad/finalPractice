import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navbar';

export default function EditBook() {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const [book, setBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  useEffect(() => {
    axios
      .get(`https://finalpractice-2.onrender.com/book/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const { title, author, description } = book;

  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      title,
      author,
      description
    };

    axios
      .post(`https://finalpractice-2.onrender.com/book/update/${id}`, bookData)
      .then((res) => {
        window.location = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <div>
        <h3>Edit Book</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              name="title"
              value={title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <input
              type="text"
              required
              className="form-control"
              name="author"
              value={author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => setBook({ ...book, description: e.target.value })}
            />
          </div>
          <br />
          <div className="form-group">
            
            <input
              type="submit"
              value="Update Book"
              className="btn btn-primary"
            />
          </div>
          <a className="btn btn-info float-left" href="/">
              Show Book List
            </a>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="display-4 text-center mb-4">Books List</h2>
          </div>
          <div className="col-md-11">
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            
            
            
            <hr className="mt-4 mb-4" />
            

          </div>
          
          
        </div>
      </div>
    </div>
  );
}

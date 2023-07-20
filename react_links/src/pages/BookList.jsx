import React from "react";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <>
      <h1>Book List Page.</h1>
      <ul>
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/2">Book 2</Link>
        </li>
      </ul>
    </>
  );
};

export default BookList;

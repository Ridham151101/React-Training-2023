import React from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  return (
    <>
      <h1>This is Book {id} Page</h1>
    </>
  );
};

export default Book;

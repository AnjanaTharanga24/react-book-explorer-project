import React from 'react'
import bookImg from "../images/book-image.jpg";
const ModalBody = ({ book }) => {

  if (!book || !book.volumeInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img 
          src={book.volumeInfo.imageLinks.thumbnail} 
          alt={book.volumeInfo.title || 'Book cover'} 
          className="max-h-72 object-contain mx-auto"
        />
      )}
      <p className="fs-4 fw-bold mt-4">{book.volumeInfo.title}</p>
      <p className="mt-2">{book.volumeInfo.description || 'No description available'}</p>
    </div>
  );
};

export default ModalBody;
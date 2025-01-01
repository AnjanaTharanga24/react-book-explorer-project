import React from "react";
const ModalBody = ({ book }) => {
  if (!book || !book.volumeInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          width="150px"
        />
      )}
      <p className="fs-4 fw-bold mt-4">{book.volumeInfo.title}</p>
      <p className="mt-2">
        {book.volumeInfo.description || "No description available"}
      </p>
    </div>
  );
};

export default ModalBody;

import { useState } from "react";
import bookImg from "../images/book-image.jpg";
import ModalBody from "./ModalBody";

function DisplayBooks({ books = [] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});

  const handleClose = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  const handleShow = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="container book-container">
      <div className="row">
        {books.map((book, index) => (
          <div
            className="card book-card col-md-3"
            key={index}
            onClick={() => handleShow(book)}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              className="book-img"
            />
            <div>
              <p className="mt-2 fw-bold">{book.volumeInfo.title}</p>
            </div>
          </div>
        ))}

        <div
          className={`modal  fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ModalBody book={selectedBook} />
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal-backdrop fade show" onClick={handleClose}></div>
        )}
      </div>
    </div>
  );
}

export default DisplayBooks;

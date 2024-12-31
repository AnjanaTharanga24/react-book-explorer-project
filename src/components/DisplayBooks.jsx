import React from "react";
import bookImg from "../images/book-image.jpg";

function DisplayBooks() {
  return (
    <div className="container book-container">
      <div className="row">
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="card book-card col-md-3">
          <img src={bookImg} className="book-img" />
          <div>
            <p className="fs-3 mt-2 fw-bold">Learn React</p>

            <button className="btn btn-primary">View More</button>
          </div>
        </div>
       
        
      </div>
    </div>
  );
}

export default DisplayBooks;

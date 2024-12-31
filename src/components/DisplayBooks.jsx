import bookImg from "../images/book-image.jpg";

function DisplayBooks({books}) {
  return (
    <div className="container book-container">
      <div className="row">


         {books.map((book,index)=>(
            <div className="card book-card col-md-3" key={index}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} className="book-img" />
            <div>
              <p className="mt-2 fw-bold">{book.volumeInfo.title}</p>
  
              <button className="btn btn-primary mt-2 mb-3">View More</button>
            </div>
          </div>
         ))}

       
        
      </div>
    </div>
  );
}

export default DisplayBooks;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import DisplayBooks from "../components/DisplayBooks";
import "../css/style.css";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      console.log(search);
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyDH6zGq2jRCMnvhwTvZ2yjq4T8cL0T1VKc"
      );
      setBooks(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="section1">
        <Header
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>

      <div className="section2">
        {books.length === 0 && (
          <div className="loader">
            <h3 className="fs-1">Loading...</h3>
          </div>
        )}
        <DisplayBooks books={books} />
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import logo from "../images/logo-2.png";
import "../css/style.css";
import axios from "axios";
function Header({search, setSearch, handleSearch}) {

  return (
    <div className="container text-white header">
      <div className="">
        <img src={logo} className="logo mb-2 mt-4" alt="logo" height="70px" />

        <h1 className="title ">Book Explorer</h1>

        <div className="search-bar d-flex">
          <input
            className="form-control "
            placeholder="Search your book"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>


      </div>
    </div>
  );
}

export default Header;

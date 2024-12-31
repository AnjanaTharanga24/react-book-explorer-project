import React from "react";
import logo from "../images/logo-2.png";
import "../css/style.css";
function Header() {
  return (
    <div className="container text-white header">
      <div className="">
        <img src={logo} className="logo mb-2 mt-4" alt="logo" height="70px" />

        <h1 className="title ">Book Explorer</h1>

        <div className="search-bar d-flex">
           <input className="form-control " placeholder="Search your book"/>
           <button className="btn btn-primary ms-2 fs-5">
           <i className="fas fa-search" />
            <span className="ms-2">Search</span>
           </button>
        </div>

        
      </div>
    </div>
  );
}

export default Header;

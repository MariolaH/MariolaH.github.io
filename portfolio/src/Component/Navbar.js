// import React, { Component } from "react";

function Navbar() {
  return (
    <nav className="nav mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/home.html" className="btn btn-outline">
              H O M E{" "}
            </a>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/Blog.html" className="btn btn-outline">
              B L O G
            </a>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/Bio.html" className="btn btn-outline">
              B I O
            </a>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <a
              href="/HTML/Contact.html"
              className="btn btn-outline"
            >
              {" "}
              P R O J E C T S
            </a>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <a
              href="/HTML/Contact.html"
              className="btn btn-outline"
            >
              C O N T A C T
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




  /* bg="secondary mb-5" variant="white" */
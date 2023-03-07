function Navbar() {
  return (
    <nav className="mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-sm-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/home.html">H O M E </a>
          </div>

          <div className="col-md-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/Blog.html">B L O G</a>
          </div>

          <div className="col-md-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/Bio.html">B I O</a>
          </div>

          <div className="col-md-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/Contact.html">P R O J E C T S</a>
          </div>

          <div className="col-md-2 d-flex justify-content-center align-items-center py-3">
            <a href="/HTML/Contact.html">C O N T A C T</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
function Navbar() {
  return (
      <div className="nav mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <button className="btn">H O M E </button>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <button className="btn">B L O G</button>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <button className="btn">B I O</button>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <button className="btn">P R O J E C T S</button>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center py-3">
            <button className="btn">C O N T A C T</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
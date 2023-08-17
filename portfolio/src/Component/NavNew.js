import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Blog from "./portfolio/src/Component/Blog.js";

function NavNew() {

  return (
    <>
      <div className="nav-container">
        <nav>
          <Navbar className="nav" expand="md">
            <Container>
              <NavbarToggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <br />
                <br />
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"} className="nav-item">
                    &#160; H O M E &#160;
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/blog"} className="nav-item">
                    &#160; B L O G &#160;
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/bio"} className="nav-item">
                    &#160; B I O &#160;
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/iOS"} className="nav-item">
                    &#160; i O S &#160;
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/projects"} className="nav-item">
                    &#160; P R O J E C T S &#160;
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to={"/contact"}>
              C O N T A C T &#160; &#160;
            </Nav.Link> */}
                </Nav>
                <a className="nav-item"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/mariola-hullings-9579b6238/"
                >
                  <img
                    src="./Image/linkedin.svg"
                    className="btnSVG"
                    alt="Linkedin Logo"
                  />
                </a>

                <a className="nav-item"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/MariolaH"
                >
                  <img
                    src="./Image/github.svg"
                    className="btnSVG"
                    alt="Github Logo"
                  />
                </a>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </div>
    </>
  );
}

export default NavNew;

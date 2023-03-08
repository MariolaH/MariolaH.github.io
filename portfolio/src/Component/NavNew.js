import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../App';
import Blog from "../Blog";
import Bio from "../Bio";
import Projects from "../Projects";
import Contact from "../Contact";

function NavNew() {
  return (
    <Router>
      <Navbar bg="secondary mb-5" variant="white">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Home"}>
              H O M E
            </Nav.Link>
            <Nav.Link as={Link} to={"/Blog"}>
              BLOG
            </Nav.Link>
            <Nav.Link as={Link} to={"/Bio"}>
              BIO
            </Nav.Link>
            <Nav.Link as={Link} to={"/Projects"}>
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to={"/Contact"}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route path="/Home">
            <App />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Bio">
            <Bio />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavNew;
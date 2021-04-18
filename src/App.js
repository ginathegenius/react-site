import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3 custom-navbar">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Gina Bueno
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            {/* <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer> */}
            <NavDropdown title="Guides">
              <NavDropdown.Item href="seacoast">Seacoast</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
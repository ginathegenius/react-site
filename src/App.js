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
            <NavDropdown title="Guides">
              <NavDropdown.Item>
              <LinkContainer to="/seacoast">
              <Nav.Link>Seacoast</Nav.Link>
            </LinkContainer>
              </NavDropdown.Item>
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
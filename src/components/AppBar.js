import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../contexts/User";
import { Link } from "react-router-dom";

function AppBar() {
  const { user } = useContext(AuthContext);

  return (
    <Navbar className="navbarStyle" sticky="top">
      <Container>
        <Navbar.Brand
          className="navbarHeader"
          as={Link}
          to="/"
          style={{ color: "#fff", fontSize: "1.5rem" }}
        >
          {/* <img
            src={IconImage}
            alt="image-description"
            style={{
              width: "40px",
              height: "40px",
              margin: "auto",
              marginRight: "10px",
            }}
          /> */}
          Mobiklinic
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end navbar-text"
          style={{ color: "#fff" }}
        >
          <Navbar.Text>
            {user && (
              <NavDropdown
                title={`Signed in as: ${user.username}`}
                id="basic-nav-dropdown"
                style={{ color: "#fff" }}
              >
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;

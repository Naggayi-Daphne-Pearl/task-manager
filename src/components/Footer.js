import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container fluid>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Malek Akorede. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

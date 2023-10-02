import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/User";
import { Row, Col, FloatingLabel } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailAddress = "Mal33@live.co.uk";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (username === "malek" && password === "mobiklinic") {
        setUser({ username }); // Set the user when successfully logged in
        navigate("/dashboard");
      } else {
        setErrorMessage("Contact Mobiklinic Admin"); // Set the error message
      }
    } else {
      setValidated(true);
    }
  };

  // Redirect to the dashboard if the user is already logged in
  if (user) {
    navigate("/dashboard");
  }

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Form
          className="container login"
          noValidate
          validated={validated}
          onSubmit={handleLogin}
        >
          <h4>Task Manager Login </h4>
          <Form.Group className="mb-3 container" controlId="formBasicEmail">
            <FloatingLabel
              label="User Name"
              className="mb-2"
              controlId="floatingInput"
            >
              <Form.Control
                required
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 container" controlId="formBasicPassword">
            <FloatingLabel
              label="Password"
              className="mb-2"
              controlId="floatingPassword"
            >
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Forgot Password? Contact Malek
              </Form.Control.Feedback>
              {errorMessage && (
                <Form.Text md={{ span: 6, offset: 3 }} className="text-danger">
                  {errorMessage}
                </Form.Text>
              )}
            </FloatingLabel>
          </Form.Group>
          <Col md={{ span: 7, offset: 2 }}>
            <a href={`mailto:${emailAddress}`}>
              <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Text
                  className="text-muted container"
                  style={{
                    fontSize: "16px",
                    marginTop: "10px",
                    textDecoration: "underline",
                  }}
                >
                  Contact the Malek to get details
                </Form.Text>
              </Form.Group>
            </a>
          </Col>

          <Row>
            <Col
              md={{ span: 12, offset: 4 }}
              className="mb-5"
              style={{
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  marginBottom: "3rem",
                  fontWeight: "bold",
                  backgroundColor: "var(--clr-primary-5)",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;

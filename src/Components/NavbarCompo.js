import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/images/sports-logo-transparent.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
export default function NavbarCompo() {
  const NavLinkStyle = {
    color: "#faac62",
    textDecoration: "none",
    fontFamily: "Graduate"
  };

  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShowLogin(false);
  const handleShow2 = () => setShowLogin(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Navbar-property">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <h1 style={NavLinkStyle}>LCO</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={NavLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={NavLinkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="/tournament" style={NavLinkStyle}>
              Tournament
            </Nav.Link>
            <Nav.Link href="/team" style={NavLinkStyle}>
              Team
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="" onClick={handleShow} style={NavLinkStyle}>
              Registraion
            </Nav.Link>
            <Nav.Link href="" onClick={handleShow2} style={NavLinkStyle}>
              Login
            </Nav.Link>
            <Nav.Link href="/faq" style={NavLinkStyle}>
              FAQ
            </Nav.Link>
            <Nav.Link href="/contact" style={NavLinkStyle}>
              Contact US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Login */}
      <Modal show={showLogin} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import React from 'react';
import './Header.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar /* fixed="top" */ bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"> MORSHED AHMED</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto  my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home">About</Nav.Link>


                            <Nav.Link as={HashLink} to="/skills">Projects</Nav.Link>
                            <Nav.Link as={HashLink} to="/allOrder"><a className="link" href="https://drive.google.com/file/d/1r51zF7l9Hp-vUBpCNla0qYHxkF8yV4-S/view?usp=sharing">Resume</a></Nav.Link>
                            <Nav.Link as={HashLink} to="/skills">Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/skills">Contact</Nav.Link>



                        </Nav>
                        <Form className="d-flex">


                            {/* <Nav.Link className="text-dark" to="/home">Logout</Nav.Link>

                            <Nav.Link className="text-dark" to="/login">Login</Nav.Link> */}
                            <img className="img-fluid img" src="https://i.ibb.co/BBKwtBr/20200321-110123-removebg-preview.png" alt="" />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
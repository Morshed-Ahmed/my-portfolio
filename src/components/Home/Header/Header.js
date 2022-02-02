import React from 'react';
import './Header.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar className="fixed-top" bg="light" expand="lg">
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
                            <Nav.Link as={HashLink} to="/about">About</Nav.Link>


                            <Nav.Link as={HashLink} to="/project">Projects</Nav.Link>
                            <Nav.Link as={HashLink} to="/allOrder"><a className="link" href="https://drive.google.com/file/d/1r51zF7l9Hp-vUBpCNla0qYHxkF8yV4-S/view?usp=sharing">Resume</a></Nav.Link>
                            <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>



                        </Nav>
                        <Form className="d-flex">
                            {/* <img className="img-fluid img" src="https://i.ibb.co/BBKwtBr/20200321-110123-removebg-preview.png" alt="" /> */}
                            {<img className="img-fluid img" src="https://www.linkpicture.com/q/profile-pic-7.png" alt="" />}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
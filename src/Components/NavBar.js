import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'



function NavBar(){
    return(
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/" Style={'Color: white'}>Advising Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/information" Style={'Color: white'}>Information</Nav.Link>
                    <Nav.Link href="/advising" Style={'Color: white'}>Advising</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;

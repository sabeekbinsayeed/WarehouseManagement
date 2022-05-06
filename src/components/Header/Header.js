import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.PNG'
const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: ' black' }} href="home#services"><strong>Services</strong></Nav.Link>
                            <Nav.Link style={{ color: ' #ff4444' }} href="home#experts">Experts</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link style={{ color: ' #ff4444' }} git as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manageservice">My something</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My items</Nav.Link>

                                </>
                            }
                            {user ?
                                <button style={{ color: ' #ff4444' }} onClick={handleSignOut}>sign out</button>
                                : <Nav.Link style={{ color: ' #ff4444' }} as={Link} to="login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                        {
                            user ?
                                <h5>{user.email}</h5> : ''}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
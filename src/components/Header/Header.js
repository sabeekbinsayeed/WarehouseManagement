import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.PNG'
import './Header.css'
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
                            <Nav.Link style={{ color: ' white' }} as={Link} to="blogs">Blogs</Nav.Link>

                            {user && <Nav.Link style={{ color: ' white' }} as={Link} to="manageinventories">Manage Items</Nav.Link>}
                            {/* <Nav.Link style={{ color: ' white' }} href="blogs">Blogs</Nav.Link>
                            {user && <Nav.Link style={{ color: ' white' }} href="manageinventories">Manage Items</Nav.Link>} */}


                        </Nav>
                        <Nav>

                            {
                                user && <>

                                    <Nav.Link style={{ color: ' white' }} as={Link} to="myitems">My items</Nav.Link>
                                    <Nav.Link style={{ color: ' white' }} as={Link} to="addproduct">Add Items</Nav.Link>

                                </>
                            }
                            {user ?
                                <button style={{ color: ' #ff4444' }} onClick={handleSignOut}>sign out</button>
                                : <Nav.Link style={{ color: ' white' }} as={Link} to="login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                        {
                            user ?
                                <h5 className='d-flex justify-content-center align-items-center ms-2 text-white'> {user.email} </h5> : ''}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
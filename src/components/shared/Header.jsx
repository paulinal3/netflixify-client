import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'
import UserOptions from './navBar/userOptions/UserOptions'
import NonUserOptions from './navBar/nonUserOptions/NonUserOptions'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    // fontSize: "15px"
}

const Header = ({ user, toggleSignIn, toggleSignUp }) => {
    return (

        <Navbar className="nav-bar-container" expand='md'>
            <Navbar.Brand>
                <Link to='/' style={linkStyle}>
                    NETFLIXIFY
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <>
                        <Nav.Link>
                            <Link to='/' style={linkStyle}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/search' style={linkStyle}>
                                Search
                            </Link>
                        </Nav.Link>
                    </>
                    {user ? <UserOptions /> : <NonUserOptions toggleSignUp={toggleSignUp} toggleSignIn={toggleSignIn} />}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header

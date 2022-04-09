import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const authenticatedOptions = (
    <>
        <Nav.Link>
            <Link to='profile' className="header-link" style={linkStyle}>
                Profile
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='sign-out' className="header-link" style={linkStyle}>
                Sign Out
            </Link>
        </Nav.Link>
    </>
)

const unauthenticatedOptions = (
    <>
        <Nav.Link>
            <Link to='sign-up' className="header-link" style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='sign-in' className="header-link" style={linkStyle}>Sign In</Link>
        </Nav.Link>
    </>
)

const alwaysOptions = (
    <>
        <Nav.Link>
            <Link to='/' className="header-link" style={linkStyle}>
                Home
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='/search' className="header-link" style={linkStyle}>
                Search
            </Link>
        </Nav.Link>
    </>
)

const Header = ({ user }) => (
    <Navbar id="nav-bar-container" expand='md'>
        <Navbar.Brand>
			<Link to='/' style={linkStyle}>
				NETFLIXIFY
			</Link>
		</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                {alwaysOptions}
                {user ? authenticatedOptions : unauthenticatedOptions}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header

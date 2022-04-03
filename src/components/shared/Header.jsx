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
			<Link to='profile' style={linkStyle}>
				Profile
			</Link>
		</Nav.Link>
		{/* <Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link> */}
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Link>
	</>
)

const alwaysOptions = (
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
)

const Header = ({ user }) => (
	<Navbar className="nav-bar-container" expand='md'>
		{/* <Navbar.Brand>
			<Link to='/' style={linkStyle}>
				NETFLIXIFY
			</Link>
		</Navbar.Brand> */}
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					// <span className='navbar-text mr-2'>Welcome, {user.firstName}</span>
					<span></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
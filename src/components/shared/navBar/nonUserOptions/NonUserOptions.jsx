import { Link } from 'react-router-dom'

import { Nav } from 'react-bootstrap'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

export default function NonUserOptions({ toggleSignUp, toggleSignIn }) {
    return (
        <>
            <Nav.Link onClick={toggleSignUp}>
                <p style={linkStyle}>Sign Up</p>
            </Nav.Link>
            <Nav.Link onClick={toggleSignIn}>
                <p style={linkStyle}>Sign In</p>
            </Nav.Link>
        </>
    )
}

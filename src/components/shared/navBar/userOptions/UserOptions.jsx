import { Link } from 'react-router-dom'

import { Nav } from 'react-bootstrap'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

export default function UserOptions() {
    return (
        <>
            <Nav.Link>
                <Link to='profile' style={linkStyle}>
                    Profile
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='sign-out' style={linkStyle}>
                    Sign Out
                </Link>
            </Nav.Link>
        </>
    )
}

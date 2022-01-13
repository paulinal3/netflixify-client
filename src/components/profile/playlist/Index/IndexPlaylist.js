import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

export default function IndexPlaylist(props) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={props.playlist.videos[0].image} /> */}
            <Card.Body>
                <Card.Title>{props.playlist.title}</Card.Title>
                <Link to={`/playlists/${props.playlist._id}`}><Button variant="primary">See Playlist</Button></Link>
            </Card.Body>
        </Card>
        // <li key={props.playlist.title} onClick={props.selectedPlaylist}>
        //     <Link to={`/playlists/${props.playlist._id}`}>{props.playlist.title}</Link>
        // </li>
    )
}

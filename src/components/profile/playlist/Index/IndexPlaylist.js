import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

export default function IndexPlaylist(props) {
    
    let playlistVideos = props.playlist.videos
    // only return image if there is at least one video in playlist
    if (playlistVideos.length > 0) {
        return (
            <Card id='playlistCard' style={{ width: '13rem' }}>
            <Card.Img variant="top" src={props.playlist.videos[0].image} />
            <Card.Body className="vidResModal">
                <Card.Title>{props.playlist.title}</Card.Title>
                <Link to={`/playlists/${props.playlist._id}`}><Button variant='success'>See Playlist</Button></Link>
            </Card.Body>
        </Card>
        )
    }

    return (
        <Card id='playlistCard' style={{ width: '13rem' }}>
            {playlistVideos}
            <Card.Body className="vidResModal">
                <Card.Title>{props.playlist.title}</Card.Title>
                <Link to={`/playlists/${props.playlist._id}`}><Button variant='success'>See Playlist</Button></Link>
            </Card.Body>
        </Card>
    )
}

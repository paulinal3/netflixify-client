import { Link } from "react-router-dom"

export default function IndexPlaylist(props) {
    return (
        <li key={props.playlist.title} onClick={props.selectedPlaylist}>
            <Link to={`/playlists/${props.playlist._id}`}>{props.playlist.title}</Link>
        </li>
    )
}

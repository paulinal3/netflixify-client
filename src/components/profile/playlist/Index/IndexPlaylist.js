import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"

export default function IndexPlaylist(props) {

    let playlistVideos = props.playlist.videos
    
    if (playlistVideos.length > 3) {
        return (
            <Link to={`/playlists/${props.playlist._id}`}>
            <div id='playlistCard'>
                <div className="vidResModal">
                    <div className="playlist-images">
                        <img className="playlist-image" id="image-one" src={props.playlist.videos[0].image} />
                        <img className="playlist-image" id="image-two" src={props.playlist.videos[1].image} />
                    </div>
                    <div className="playlist-images">
                        <img className="playlist-image" id="image-three" src={props.playlist.videos[2].image} />
                        <img className="playlist-image" id="image-four" src={props.playlist.videos[3].image} />
                    </div>
                </div>
                <div className="playlist-title">
                    <h4>{props.playlist.title}</h4>
                </div>
            </div>
            </Link>
        )
    } else if (playlistVideos.length > 0) {
        return (
            <Link to={`/playlists/${props.playlist._id}`}>
            <div id='playlistCard'>
                <div className="vidResModal">
                    <div className="playlist-images">
                        <img className="single-image" src={props.playlist.videos[0].image} />
                    </div>
                </div>
                <div className="playlist-title">
                    <h4>{props.playlist.title}</h4>
                </div>
            </div>
            </Link>
        )
    }

    return (
        <Link to={`/playlists/${props.playlist._id}`}>
        <div id='playlistCard'>
            <div className="vidResModal">
                <div className="no-images-container">
                    <p className="no-image">This playlist has no videos yet!</p>
                    <Link to={"/search"}><button className="btn" id="go-search-btn">Search Now!</button></Link>
                </div>
            </div>
            <div className="playlist-title">
                <h4>{props.playlist.title}</h4>
            </div>
        </div>
        </Link>
    )
}

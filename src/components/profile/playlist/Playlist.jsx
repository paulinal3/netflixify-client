import { Link } from "react-router-dom";

export default function Playlist({ playlist }) {

    if (playlist.videos.length > 3) {
        return (
            <Link to={`/playlists/${playlist._id}`}>
                <div id='playlistCard'>
                    <div className="vidResModal">
                        <div className="playlist-images">
                            <img className="playlist-image" id="image-one" src={playlist.videos[0].image} />
                            <img className="playlist-image" id="image-two" src={playlist.videos[1].image} />
                        </div>
                        <div className="playlist-images">
                            <img className="playlist-image" id="image-three" src={playlist.videos[2].image} />
                            <img className="playlist-image" id="image-four" src={playlist.videos[3].image} />
                        </div>
                    </div>
                    <div className="playlist-title">
                        <h4>{playlist.title}</h4>
                    </div>
                </div>
            </Link>
        )
    } else if (playlist.videos.length > 0) {
        return (
            <Link to={`/playlists/${playlist._id}`}>
                <div id='playlistCard'>
                    <div className="vidResModal">
                        <div className="playlist-images">
                            <img className="single-image" src={playlist.videos[0].image} />
                        </div>
                    </div>
                    <div className="playlist-title">
                        <h4>{playlist.title}</h4>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div id='playlistCard'>
            <div className="vidResModal">
                <div className="no-images-container">
                    <p className="no-image">This playlist has no videos yet!</p>
                    <Link to={"/search"}><button className="btn" id="go-search-btn">Search Now!</button></Link>
                </div>
            </div>
            <div className="playlist-title">
                <h4>{playlist.title}</h4>
            </div>
        </div>
    )
}

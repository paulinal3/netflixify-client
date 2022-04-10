import { FaPlay } from "react-icons/fa"
import { ImCross } from 'react-icons/im'
import { IconContext } from "react-icons/lib"
import "./showVideo.css"

export default function ShowVideo({ showVideoModal, playlistVid, watchedClicked, watchedStatus, markedWatchedIcon, setShowVideoModal }) {

    const markWatched = watchedStatus ? '  Watched' : '  Mark as Watched'

    return (
        <div className={showVideoModal ? "display-show-vid-modal" : "hide-show-vid-modal"}>
            <div className="close-modal-btn">
                <button className="btn" id="close-btn" onClick={() => setShowVideoModal(false)}><ImCross /></button>
            </div>
            <div className="modal-body">
                <img className="modal-image" src={playlistVid.image} />
                <div className="modal-description">
                    <h3>{playlistVid.title}</h3>
                    <h5>{playlistVid.synopsis}</h5>
                    {playlistVid.rating ? 
                    <p>Rating: {playlistVid.rating}</p>
                    : null }
                    <p>{playlistVid.released} {playlistVid.type}</p>
                    <div className="modal-settings">
                        <form onSubmit={watchedClicked}>
                            <button type="submit" className="btn" id="watched-status-btn" value={playlistVid._id}>{markedWatchedIcon}{markWatched}</button>
                        </form>
                        <a href={`https://www.netflix.com/title/${playlistVid.netflixid}`} target='_blank' rel='noopener noreferrer'>
                            <button className="btn" id="play-btn">
                                <FaPlay className="play-icon" /> Play
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

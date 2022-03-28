import { Button, Modal } from "react-bootstrap"

import { FaPlay } from "react-icons/fa"
import { ImCross } from 'react-icons/im'
import "./showVideo.css"

export default function ShowVideo({ showVideoModal, playlistVid, watchedClicked, watchedStatus, markedWatchedIcon, setShowVideoModal }) {

    const markWatched = watchedStatus ? '  Watched' : '  Mark as Watched'

    return (
        <div className={showVideoModal ? "display-show-vid-modal" : "hide-show-vid-modal"}>
            <div className="close-modal-btn">
                <Button variant="success" onClick={() => setShowVideoModal(false)}><ImCross /></Button>
            </div>
            <div className="modal-body">
                <img src={playlistVid.image} />
                <div className="modal-description">
                    <h3>{playlistVid.title}</h3>
                    <h5>{playlistVid.synopsis}</h5>
                    {playlistVid.rating ? 
                    <p>Rating: {playlistVid.rating}</p>
                    : null }
                    <p>{playlistVid.released} {playlistVid.type}</p>
                    <div className="modal-settings">
                        <form onSubmit={watchedClicked}>
                            <Button type="submit" variant='success' value={playlistVid._id}>{markedWatchedIcon}{markWatched}</Button>
                        </form>
                        <a href={`https://www.netflix.com/title/${playlistVid.netflixid}`} target='_blank' rel='noopener noreferrer'>
                            <Button variant='success'>
                                <FaPlay /> Play
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { useState } from "react"

import { destroyVideo, updateVideo } from "../../../api/video"
import ShowVideo from "../showVideos/ShowVideo"

import { Button, Card, Tooltip, OverlayTrigger } from "react-bootstrap"
import { FaPlay, FaCheck, FaCheckSquare } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { GrExpand } from "react-icons/gr"
import "./indexVideos.css"

export default function IndexVideos({ video, playlistId, playlistVids, user, setPlaylistVids }) {

    const [watchedStatus, setWatchedStatus] = useState(video.watched)
    const [showVideoModal, setShowVideoModal] = useState(false)

    // helper method to update a video"s watched status
    // const editVideo = (e) => {
    //     console.log(e.target.value)
    //     updateVideo(user, e.target.value, watchedStatus)
    //     // .catch(err => console.error)
    // }

    // helper method to change watched status when click
    const watchedClicked = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        // editVideo(e)
        updateVideo(user, e.target[0].value, watchedStatus)
        setWatchedStatus(!watchedStatus)
    }

    // helper method to delete a video
    const deleteVideo = (e) => {
        e.preventDefault()
        destroyVideo(user, playlistId, e.target[0].value)
        // const newVids = playlistVids.filter(vid => vid._id !== e.target[0].value)
        // setPlaylistVids(newVids)
            .then(res => {
                if (res.status == 204) {
                    const newVids = playlistVids.filter(vid => vid._id !== e.target[0].value)
                    setPlaylistVids(newVids)
                }
            })
            .catch(err => console.log(err))
    }

    // conditional to display watched status
    const markedWatchedIcon = watchedStatus ? <FaCheck /> : <FaCheckSquare />

    const removeHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Remove from playlist
        </Tooltip>
    )

    const playHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Watch Now
        </Tooltip>
    )

    const watchedHover = (props) => (watchedStatus) ? (
        <Tooltip id="button-tooltip" {...props}>
            Watched
        </Tooltip>
    ) : (
        <Tooltip id="button-tooltip" {...props}>
            Mark as Watched
        </Tooltip>
    )

    const moreHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            More info
        </Tooltip>
    )

    return (
        <>
            {user ?
                <>
                    <Card id="img__wrap" className="bg-dark text-white" style={{ width: "13rem" }}>
                        <Card.Img src={video.image} alt={video.title} />
                        <Card.ImgOverlay>
                            <div id="removeVidBtn">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={removeHover}
                                >
                                    <form onSubmit={deleteVideo}>
                                        <button type="submit" id="img__description" className="btn" value={video._id}><ImCross /></button>
                                    </form>
                                </OverlayTrigger>,
                            </div>
                            <div id="showOptions">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={watchedHover}
                                >
                                    <form onSubmit={watchedClicked}>
                                        <button type="submit" className="btn" value={video._id} id="img__description">{markedWatchedIcon}</button>
                                    </form>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={playHover}
                                >
                                    <a href={`https://www.netflix.com/title/${video.netflixid}`} target="_blank" rel="noopener noreferrer">
                                        <button id="img__description" className="btn">
                                            <FaPlay />
                                        </button>
                                    </a>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={moreHover}
                                >
                                    <button className="btn" id="img__description" onClick={() => setShowVideoModal(true)}><GrExpand /></button>
                                </OverlayTrigger>

                            </div>
                        </Card.ImgOverlay>
                    </Card >
                    <ShowVideo
                        showVideoModal={showVideoModal}
                        setShowVideoModal={setShowVideoModal}
                        playlistVid={video}
                        watchedClicked={watchedClicked}
                        watchedStatus={watchedStatus}
                        markedWatchedIcon={markedWatchedIcon}
                    />
                </>
                : <div><h1>Please sing in</h1></div>
            }
        </>
    )
}

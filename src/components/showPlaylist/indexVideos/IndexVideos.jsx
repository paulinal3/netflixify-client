import { useState } from "react"
import { Button, Card, Tooltip, OverlayTrigger } from "react-bootstrap"
import { destroyVideo, updateVideo } from "../../../api/video"
import ShowVideo from "../showVideos/ShowVideo"
import { FaPlay, FaCheck, FaCheckSquare } from "react-icons/fa"
import { ImCross } from 'react-icons/im'
import { GrExpand } from 'react-icons/gr'

export default function IndexVideos(props) {

    const [watchedStatus, setWatchedStatus] = useState(props.playlistVids.watched)
    const [modalShow, setModalShow] = useState(false)

    // helper method to update a video's watched status
    const editVideo = (e) => {
        updateVideo(props.currentUser, e.target.value, watchedStatus)
        // .catch(err => console.error)
    }

    // helper method to change watched status when click
    const watchedClicked = (e) => {
        editVideo(e)
        setWatchedStatus(!watchedStatus)
    }

    // helper method to delete a video
    const deleteVideo = (e) => {
        destroyVideo(props.currentUser, e.target.value)
            .then(() => {
                props.refreshPlaylist()
            })
            .catch(err => console.error)
    }

    // conditional to display watched status
    const markWatched = watchedStatus ? <FaCheck /> : <FaCheckSquare />

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
        <Tooltip id='button-tooltip' {...props}>
            Watched
        </Tooltip>
    ) : (
        <Tooltip id='button-tooltip' {...props}>
            Mark as Watched
        </Tooltip>
    )

    const moreHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            More info
        </Tooltip>
    )

    return (
        <Card id="img__wrap" className="bg-dark text-white" style={{ width: '13rem' }}>
            <Card.Img src={props.playlistVids.image} alt={props.playlistVids.title} />
            <Card.ImgOverlay>
                <div id='removeVidBtn'>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={removeHover}
                    >
                        <Button id='img__description' variant='danger' value={props.playlistVids._id} onClick={deleteVideo}><ImCross /></Button>
                    </OverlayTrigger>,
                </div>
                <div id='showOptions'>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={watchedHover}
                    >
                        <Button variant='success' id='img__description' value={props.playlistVids._id} onClick={watchedClicked}>{markWatched}</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={playHover}
                    >
                        <a href={`https://www.netflix.com/title/${props.playlistVids.netflixid}`} target='_blank' rel='noopener noreferrer'>
                            <Button id='img__description' variant='success'>
                                <FaPlay />
                            </Button>
                        </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={moreHover}
                    >
                        <Button variant='success' id='img__description' onClick={() => setModalShow(true)}><GrExpand /></Button>
                    </OverlayTrigger>
                    <ShowVideo
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        playlistVid={props.playlistVids}
                        watchedClicked = {watchedClicked}
                        watchedStatus = {watchedStatus}
                    />
                </div>
            </Card.ImgOverlay>
        </Card >
    )
}

import { useState } from "react"
import { Form, Button, Card, Tooltip, OverlayTrigger } from "react-bootstrap"
import { destroyVideo, getOneVideo, getPlaylistVideos, updateVideo } from "../../../../api/video"
import { FaPlay } from "react-icons/fa"
import { ImCross } from 'react-icons/im'

export default function IndexVideos(props) {

    const [watchedStatus, setWatchedStatus] = useState(props.playlistVids.watched)

    // helper method to update a video's watched status
    const editVideo = (e) => {
        // axios call
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
        // axios call
        destroyVideo(props.currentUser, e.target.value)
            .then(() => {
                props.refreshPlaylist()
            })
            .catch(err => console.error)
    }

    // conditional to display watched status
    const markWatched = watchedStatus === true ? 'Watched' : 'Mark as Watched'

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

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.playlistVids.image} alt={props.playlistVids.title} />
            <Card.Body>
                <Card.Title>{props.playlistVids.title}</Card.Title>
                {/* <Card.Text>{props.playlistVids.synopsis}</Card.Text> */}
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={playHover}
                >
                    <a href={`https://www.netflix.com/title/${props.playlistVids.netflixid}`} target='_blank' rel='noopener noreferrer'>
                        <Button variant='secondary'>
                            <FaPlay />
                        </Button>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={removeHover}
                >
                    <Button variant='secondary' value={props.playlistVids._id} onClick={deleteVideo}><ImCross /></Button>
                </OverlayTrigger>,

                <Button value={props.playlistVids._id} onClick={watchedClicked}>{markWatched}</Button>
            </Card.Body>
        </Card>
    )
}

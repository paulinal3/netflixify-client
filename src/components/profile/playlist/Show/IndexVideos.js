import { useState } from "react"
import { Form, Button, Card, Tooltip, OverlayTrigger } from "react-bootstrap"
import { destroyVideo, getOneVideo, getPlaylistVideos, updateVideo } from "../../../../api/video"

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

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Remove from playlist
        </Tooltip>
    );

    return (
        // <div>
        //     <li key={props.playlistVids._id}>
        //         <img src={props.playlistVids.image} />
        //         <Form>
        //             <Button value={props.playlistVids._id} onClick={deleteVideo}>Remove From Playlist</Button>
        //             <Button value={props.playlistVids._id} onClick={watchedClicked}>{markWatched}</Button>
        //         </Form>
        //         <a href={`https://www.netflix.com/title/${props.playlistVids.netflixid}`} target='_blank' rel='noopener noreferrer'>Watch Now</a>
        //     </li>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.playlistVids.image} />
            <Card.Body>
                <Card.Title>{props.playlistVids.title}</Card.Title>
                <Card.Text>{props.playlistVids.synopsis}</Card.Text>
                <a href={`https://www.netflix.com/title/${props.playlistVids.netflixid}`} target='_blank' rel='noopener noreferrer'><Button variant="primary">Watch Now</Button></a>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Button value={props.playlistVids._id} onClick={deleteVideo}>X</Button>
                </OverlayTrigger>,

                <Button value={props.playlistVids._id} onClick={watchedClicked}>{markWatched}</Button>
            </Card.Body>
        </Card>
    )
}

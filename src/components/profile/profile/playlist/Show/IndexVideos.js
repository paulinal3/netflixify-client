import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { destroyVideo, getOneVideo, getPlaylistVideos, updateVideo } from "../../../../../api/video"

export default function IndexVideos(props) {

    const [selectedVid, setSelectedVid] = useState({})
    const [watchedStatus, setWatchedStatus] = useState(props.playlistVids.watched)

    // useEffect((e) => {
    //     if (e) {
    //         watchedClicked(e)
    //     }
    // }, [watchedStatus])


    const watchedClicked = (e) => {
        console.log('watch status', watchedStatus)
        editVideo(e)
        setWatchedStatus(!watchedStatus)
        // .then(() => {
        //     props.refreshPlaylist()
        // })
        // .catch(err => console.error)
    }

    // helper method to update a video's watched status
    const editVideo = (e) => {
        // axios call
        updateVideo(props.currentUser, e.target.value, watchedStatus)
        // .catch(err => console.error)
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

    return (
        <div>
            <li key={props.playlistVids._id}>
                <img src={props.playlistVids.largeimage} />
                <Form>
                    <Button value={props.playlistVids._id} onClick={deleteVideo}>Remove From Playlist</Button>
                    <Button value={props.playlistVids._id} onClick={watchedClicked}>{markWatched}</Button>
                </Form>
                <a href={`https://www.netflix.com/title/${props.playlistVids.netflixid}`} target='_blank' rel='noopener noreferrer'>Watch Now</a>
            </li>
        </div>
    )
}

import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { destroyVideo } from "../../../../../api/video"

export default function IndexVideos(props) {

    const [selectedVid, setSelectedVid] = useState('')

    const videoClicked = (e) => {
        console.log('this is the selected vid id:', e.target.value)
        setSelectedVid(e.target.value)
    }

    const deleteVideo = (e) => {
        videoClicked(e)
        destroyVideo(props.currentUser, selectedVid)
            .then(() => {
                props.refreshPlaylist()
            })
            .catch(err => console.error)
    }

    return (
        <div>
            <li key={props.playlistVids._id}>
                <img src={props.playlistVids.largeimage} />
                <Form>
                    <Button value={props.playlistVids._id} onClick={deleteVideo}>Remove From Playlist</Button>
                </Form>
            </li>
        </div>
    )
}

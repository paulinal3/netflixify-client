import { useState } from "react"
import { Form } from "react-bootstrap"
import { postVideo } from "../../api/video"

export default function PostSearchRes(props) {

    const [playlist, setPlaylist] = useState(null)

    // helper method to set state based on what playist is clicked
    const playlistClicked = (e) => {
        console.log('this playlist id was selected:\n', e.target.value)
        setPlaylist(e.target.value)
    }

    // helper method to add a video to a playlist
    const postVideoToPlaylist = (e) => {
        e.preventDefault()
        console.log('this is the playlist id:', props.indexPlaylists)
        // axios call to db
        postVideo(props.currUser, playlist, props.videoData)
            .then(() => {
                props.refPlaylists()
                setPlaylist(null)
            })
            .catch(err => console.error)
    }

    // map through state
    const allPlaylists = props.indexPlaylists.map(p => {
        return(
            // and display each playlist title as a dropdown option
            <option key={p.title} value={p._id}>
                {p.title}
            </option>
        )
    })
    
    return (
        <Form onSubmit={postVideoToPlaylist}>
            <Form.Select aria-label="add video to playlist selector" onChange={playlistClicked}>
                <option value={null} selected={playlist == null ? true : false}>Add to a Playlist</option>
                {allPlaylists}
            </Form.Select>
            <Form.Control type='submit' value='Add to Playlist' />
        </Form>
    )
}

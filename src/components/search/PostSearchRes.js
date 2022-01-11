import { useState } from "react"
import { Form } from "react-bootstrap"
import { postVideo } from "../../api/video"

export default function PostSearchRes(props) {

    const [playlist, setPlaylist] = useState('')

    const playlistClicked = (e) => {
        console.log('this playlist id was selected:\n', e.target.value)
        setPlaylist(e.target.value)
    }

    const allPlaylists = props.indexPlaylists.map(p => {
        return(
            <option key={p.title} value={p._id}>
                {p.title}
            </option>
        )
    })

    const postVideoToPlaylist = (e) => {
        e.preventDefault()
        console.log('this is the playlist id:', props.indexPlaylists)
        postVideo(props.currUser, playlist, props.videoData)
            .then(() => {
                props.refPlaylists()
                setPlaylist('')
            })
            .catch(err => console.error)
    }
    
    return (
        <Form onSubmit={postVideoToPlaylist}>
            <Form.Select aria-label="add video to playlist selector" onChange={playlistClicked}>
                <option>Add to a Playlist</option>
                {allPlaylists}
            </Form.Select>
            <Form.Control type='submit' value='Add to Playlist' />
        </Form>
    )
}

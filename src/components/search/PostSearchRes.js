import { Form } from "react-bootstrap"

export default function PostSearchRes(props) {

    const allPlaylists = props.indexPlaylists.map(p => {
        return(
            <option key={p.title} value={p._id}>
                {p.title}
            </option>
        )
    })
    
    return (
        <Form>
            <Form.Select aria-label="add video to playlist selector">
                <option>Add to a Playlist</option>
                {allPlaylists}
            </Form.Select>
            <Form.Control type='submit' value='Add to Playlist' />
        </Form>
    )
}

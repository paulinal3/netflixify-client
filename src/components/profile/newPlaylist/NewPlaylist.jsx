import { useState } from "react"
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap"
import { postPlaylist } from "../../../api/playlist"

export default function NewPlaylist(props) {

    const [newPlaylist, setNewPlaylist] = useState('')

    const handleTitleChange = (e) => {
        console.log('this is the new title:', e.target.value)
        setNewPlaylist(e.target.value)
    }

    // helper method to create a playlist
    const createNewPlaylist = () => {
        // axios call
        postPlaylist(props.currentUser, newPlaylist)
            .then(() => {
                props.allPlaylists()
                props.onHide()
                setNewPlaylist('')
            })
            .catch(err => console.error)
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form>
                <Modal.Body id='newPlaylistModal'>
                    <FloatingLabel
                        controlId='playlistTitle'
                        label='Playlist Title'
                        className='mb-3'
                    >
                        <Form.Control
                            type='text'
                            name='title'
                            value={newPlaylist.title}
                            onChange={handleTitleChange}
                            placeholder='Playlist Title'
                        />
                    </FloatingLabel>
                    <Button id='createPlaylistBtn' onClick={() => createNewPlaylist()}>Create Playlist</Button>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

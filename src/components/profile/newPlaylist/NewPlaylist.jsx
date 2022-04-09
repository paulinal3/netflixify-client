import { useState } from "react"
import { postPlaylist } from "../../../api/playlist"
import "./newPlaylist.css"

export default function NewPlaylist(props) {

    const { currentUser, refreshPlaylists, setShowNewPlayModal } = props

    const [newPlaylist, setNewPlaylist] = useState('')

    const handleTitleChange = (e) => {
        console.log('this is the new title:', e.target.value)
        setNewPlaylist(e.target.value)
    }

    const createNewPlaylist = (e) => {
        e.preventDefault();
        postPlaylist(currentUser, newPlaylist)
            .then(() => {
                refreshPlaylists()
                setShowNewPlayModal(false)
                setNewPlaylist('')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="modal-container">
            <form onSubmit={createNewPlaylist} className="new-playlist-form">
                <input type="text" name="title" value={newPlaylist.title} onChange={handleTitleChange} id="new-playlist-title" placeholder="  Enter playlist title" />
                <div className="new-playlist-btns">
                    <button type="submit" className="btn" id="create-btn">Create Playlist</button>
                    <button onClick={() => setShowNewPlayModal(false)} className="btn" id="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    )
}

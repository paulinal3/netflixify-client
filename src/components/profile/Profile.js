import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import { getPlaylists } from "../../api/playlist"
import IndexPlaylist from "./playlist/Index/IndexPlaylist"
import NewPlaylist from "./playlist/NewPlaylist"

export default function Profile(props) {

    const [playlist, setPlaylist] = useState([])
    const [modalShow, setModalShow] = useState(false)

    // render all the user's playlists as soon as they sign in
    useEffect(() => {
        // axios call to find all the user's playlists in the db
        getPlaylists(props.user)
            .then(foundPlaylists => {
                console.log(`these are all the current user's playlists \n`, foundPlaylists.data.foundPlaylists)
                // sets the playlists to state
                props.setPlaylists(foundPlaylists.data.foundPlaylists)
            })
            .catch(err => console.error)
    }, [])

    // helper method to determine which playlist is being clicked
    const playlistClicked = (e) => {
        console.log('this playlist id was selected:\n', e.target)
        // sets the clicked playlist's id to state
        setPlaylist(e.target.value)
    }

    // map through the playlists in state
    const allPlaylists = props.playlists.map(p => {
        return (
            // and pass them as a prop to IndexPlaylist
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    return (
        <div>
            <h1>Your Playlists:</h1>
            <ol>{allPlaylists}</ol>
            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Create a New Playlist
                </Button>

                <NewPlaylist
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    currentUser={props.user}
                    allPlaylists={props.getAllPlaylists}
                />
            </>
        </div>
    )
}

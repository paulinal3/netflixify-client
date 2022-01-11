import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import { getPlaylists } from "../../../api/playlist"
import IndexPlaylist from "./playlist/Index/IndexPlaylist"
import NewPlaylist from "./playlist/NewPlaylist"

export default function Profile(props) {

    const [playlist, setPlaylist] = useState([])
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        getPlaylists(props.user)
            .then(foundPlaylists => {
                console.log(`these are all the current user's playlists \n`, foundPlaylists.data.foundPlaylists)
                props.setPlaylists(foundPlaylists.data.foundPlaylists)
            })
            .catch(err => console.error)
    }, [])

    const playlistClicked = (e) => {
        console.log('this playlist id was selected:\n', e.target)
        setPlaylist(e.target.value)
    }

    const allPlaylists = props.playlists.map(p => {
        return (
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    return (
        <div>
            <h1>{props.user.firstName}' Profile</h1>
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

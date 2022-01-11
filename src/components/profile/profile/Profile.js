import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import { getPlaylists } from "../../../api/playlist"
import NewPlaylist from "./playlist/NewPlaylist"

export default function Profile(props) {

    // const [playlists, setPlaylists] = useState([])
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        getPlaylists(props.user)
            .then(foundPlaylists => {
                console.log(`these are all the current user's playlists \n`, foundPlaylists.data.foundPlaylists)
                props.setPlaylists(foundPlaylists.data.foundPlaylists)
            })
            .catch(err => console.error)
    }, [])

    const allPlaylists = props.playlists.map(p => {
        return (
            <li key={p.title}>
                {p.title}
            </li>
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

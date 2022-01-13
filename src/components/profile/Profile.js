import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import { getPlaylists } from "../../api/playlist"
import IndexPlaylist from "./playlist/Index/IndexPlaylist"
import NewPlaylist from "./playlist/NewPlaylist"
import { GrAdd } from "react-icons/gr"

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
            <h1>{props.user.firstName}'s Playlists:</h1>
            <Button variant='secondary'><GrAdd onClick={() => setModalShow(true)}/></Button>
            <ol id='allPlaylists'>{allPlaylists}</ol>
            <>
                {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                    <GrAdd />
                </Button> */}


                <NewPlaylist
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    currentUser={props.user}
                    allPlaylists={props.getAllPlaylists}
                />
            </>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={props.playlist.videos[0].image} /> */}
            <Card.Body>
                <Card.Title>Watched Videos</Card.Title>
                <Link to={`/playlists/watched`}><Button variant="secondary">See Playlist</Button></Link>
            </Card.Body>
        </Card>
        </div>
    )
}

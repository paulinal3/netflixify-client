import { useState, useEffect } from "react"
import { Button, Card, Form, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Link } from "react-router-dom"

import { getPlaylists } from "../../api/playlist"
import IndexPlaylist from "./playlist/Index/IndexPlaylist"
import NewPlaylist from "./playlist/NewPlaylist"
import { GrAdd } from "react-icons/gr"

export default function Profile(props) {

    // const [playlist, setPlaylist] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [playlistsOrder, setPlaylistsOrder] = useState('alph')

    // render all the user's playlists as soon as they sign in
    useEffect(() => {
        // axios call to find all the user's playlists in the db
        getPlaylists(props.user)
            .then(foundPlaylists => {
                console.log(`these are all the current user's playlists \n`, foundPlaylists.data.foundPlaylists)
                // sets the playlists to state
                props.setPlaylists(foundPlaylists.data.foundPlaylists)
                // props.playlists.push({ title: 'Watched Videos'})
            })
            .catch(err => console.error)
    }, [])

    // helper method to determine which playlist is being clicked
    const playlistClicked = (e) => {
        console.log('this playlist id was selected:\n', e.target)
        // sets the clicked playlist's id to state
        props.setPlaylists(e.target.value)
    }

    // sort the playlists alphabeticaly
    let allPlaylists = props.playlists.sort((a, b) => (a.title < b.title) ? -1 : 1)
        // then map through them
        .map(p => {
            return (
                // and pass them as a prop to IndexPlaylist
                <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
            )
        })

    // sort the playlists newest first
    const newestPlaylists = props.playlists.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).reverse().map(p => {
        return (
            // and pass them as a prop to IndexPlaylist
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    // sort the playlists oldest first
    const oldestPlaylists = props.playlists.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).map(p => {
        return (
            // and pass them as a prop to IndexPlaylist
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    // sort the playlists by most recently updated first
    const updatedPlaylists = props.playlists.sort((a, b) => {
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
    }).reverse().map(p => {
        return (
            // and pass them as a prop to IndexPlaylist
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    // conditional for playlist sort
    if (playlistsOrder === 'new') {
        allPlaylists = newestPlaylists
    } else if (playlistsOrder === 'old') {
        allPlaylists = oldestPlaylists
    } else if (playlistsOrder === 'updated') {
        allPlaylists = updatedPlaylists
    }

    const sortClicked = (e) => {
        setPlaylistsOrder(e.target.value)
    }

    const createHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create Playlist
        </Tooltip>
    )

    return (
        <div id='container'>
            <div id='profileSetting'>
                <Form.Select id='sortBy' onChange={sortClicked}>
                    <option value='alph'>A to Z</option>
                    <option value='new'>Newest Created</option>
                    <option value="old">Oldest Created</option>
                    <option value='updated'>Most Updated</option>
                </Form.Select>
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={createHover}
                >
                    <Button size='sm' variant='success'><GrAdd onClick={() => setModalShow(true)} /></Button>
                </OverlayTrigger>
            </div>
            <header id='profileHeader'>
                <h1>{props.user.firstName}'s Playlists:</h1>
            </header>
            <ol id='allPlaylists'>
                {allPlaylists}
                <Card style={{ width: '13rem' }}>
                    <Card.Body className="vidResModal">
                        <Card.Title>Watched Videos</Card.Title>
                        <Link to={`/playlists/watched`}><Button variant="success">See Playlist</Button></Link>
                    </Card.Body>
                </Card>
            </ol>
            <NewPlaylist
                show={modalShow}
                onHide={() => setModalShow(false)}
                currentUser={props.user}
                allPlaylists={props.getAllPlaylists}
            />
        </div>
    )
}

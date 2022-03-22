import { useState, useEffect } from "react"
import { Button, Card, Form, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Link } from "react-router-dom"

import { getPlaylists } from "../../api/playlist"

import IndexPlaylist from "./playlist/Index/IndexPlaylist"
import NewPlaylist from "./playlist/NewPlaylist"

import { GrAdd } from "react-icons/gr"
import { RiLockPasswordFill } from "react-icons/ri"

export default function Profile(props) {

    // const [playlist, setPlaylist] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [playlistsOrder, setPlaylistsOrder] = useState("alph")

    useEffect(() => {
        getPlaylists(props.user)
            .then(foundPlaylists => {
                console.log(`the current user's playlists \n`, foundPlaylists.data.foundPlaylists)
                props.setPlaylists(foundPlaylists.data.foundPlaylists)
                // props.playlists.push({ title: "Watched Videos"})
            })
            .catch(err => console.error)
    }, [])

    // helper method to determine which playlist is being clicked
    const playlistClicked = (e) => {
        console.log("this playlist id was selected:\n", e.target)
        props.setPlaylists(e.target.value)
    }

    // sort the playlists alphabeticaly
    let allPlaylists = props.playlists.sort((a, b) => (a.title < b.title) ? -1 : 1)
        .map(p => {
            return (
                <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
            )
        })

    // sort the playlists newest -> oldest
    const newestPlaylists = props.playlists.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).reverse().map(p => {
        return (
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    // sort the playlists oldest -> newest
    const oldestPlaylists = props.playlists.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).map(p => {
        return (
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    // sort the playlists by most recently updated first
    const updatedPlaylists = props.playlists.sort((a, b) => {
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
    }).reverse().map(p => {
        return (
            <IndexPlaylist playlist={p} selectedPlaylist={playlistClicked} />
        )
    })

    switch (playlistsOrder) {
        case "new":
            allPlaylists = newestPlaylists;
            break;
        case "old":
            allPlaylists = oldestPlaylists;
            break;
        case "updated":
            allPlaylists = updatedPlaylists;
            break;
    }

    const sortClicked = (e) => {
        setPlaylistsOrder(e.target.value)
    }

    const createHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create Playlist
        </Tooltip>
    )

    const pwHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Change Password
        </Tooltip>
    )

    return (
        <div className="page-container" id="profile-page-container">
            <div className="header-container" id="profile-header-container">
                <header className="header-title">
                    <h1>{props.user.firstName}'s Playlists:</h1>
                </header>
                <div id="profile-settings">
                    {/* <-- playlist sort dropdown --> */}
                    <Form.Select id="playlists-sort" onChange={sortClicked}>
                        <option value="alph">A to Z</option>
                        <option value="new">Newest Created</option>
                        <option value="old">Oldest Created</option>
                        <option value="updated">Most Updated</option>
                    </Form.Select>
                    <div className="profile-settings-btns">
                        {/* <-- create new playlist button --> */}
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={createHover}
                        >
                            <Button size="sm" id="create-playlist-btn"><GrAdd onClick={() => setModalShow(true)} /></Button>
                        </OverlayTrigger>
                        {/* <-- change password button --> */}
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={pwHover}
                        >
                            <Link to="../change-password"><Button size="sm" id="change-pw-btn"><RiLockPasswordFill /></Button></Link>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <ol className="cards-list" id="all-playlists-container">
                {allPlaylists}
                <Link to={`/playlists/watched`}>
                    <div id='playlistCard'>
                        <div className="vidResModal">
                            <div className="no-images-container">
                                <p className="no-image">Check out all the Netflix videos you've watched!</p>
                            </div>
                        </div>
                        <div className="playlist-title">
                            <h4>Watched Videos</h4>
                        </div>
                    </div>
                </Link>
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

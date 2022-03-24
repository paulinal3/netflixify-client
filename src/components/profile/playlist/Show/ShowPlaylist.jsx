import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"

import { destroyPlaylist, getOnePlaylist, updatePlaylist } from "../../../../api/playlist"
import IndexVideos from "./IndexVideos"

export default function ShowPlaylist(props) {

    const { user, getAllPlaylists, playlists } = props

    const { pathname } = useLocation()
    const playlistId = pathname.split("/")[2]
    // console.log("this is the playlist id:", playlistId)

    const [playlist, setPlaylist] = useState({})
    const [playlistVids, setPlaylistVids] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState("")
    const [title, setTitle] = useState(true)

    useEffect(() => {
        getOnePlaylist(user, playlistId)
            .then(foundPlaylist => {
                console.log("this is the found playlist\n", foundPlaylist.data.playlist)
                setPlaylist(foundPlaylist.data.playlist)
                setPlaylistVids(foundPlaylist.data.playlist.videos)
                setPlaylistTitle(foundPlaylist.data.playlist.title)
            })
            .catch(err => console.log(err))
    }, [playlistId])

    const refreshPlaylist = () => {
        // axios call to find the selected playlist in the db
        getOnePlaylist(user, playlistId)
            .then(foundPlaylist => {
                console.log("this is the found playlist\n", foundPlaylist.data.playlist)
                // set the found playlist to state
                setPlaylist(foundPlaylist.data.playlist)
                setPlaylistVids(foundPlaylist.data.playlist.videos)
            })
            .catch(err => console.log(err))
    }

    const handleTitleChange = (e) => {
        setPlaylistTitle(e.target.value)
    }

    // helper method that listens for when edit button is clicked
    const displayEdit = (e) => {
        // if clicked, it changes title state to false to display edit/delete
        setTitle(false)
    }

    // helper method to edit the playlist title
    const editPlaylist = () => {
        // axios call
        updatePlaylist(user, playlistId, playlistTitle)
            // refresh playlist call and set title back to true to display new title
            .then(() => {
                refreshPlaylist()
                setPlaylistTitle(playlistTitle)
                setTitle(true)
            })
    }

    const navigate = useNavigate()
    // helper method to delete the playlist
    const deletePlaylist = () => {
        // axios call
        destroyPlaylist(user, playlistId)
            // redirect back to profile
            .then(() => navigate("/profile"))
            .catch(err => console.error)
    }

    // map over all videos in specified playlist
    const getPlaylistVids = playlistVids.map(v => {
        return (
            // and pass a prop to IndexVideos
            <IndexVideos playlistVids={v} currentUser={user} refreshPlaylist={refreshPlaylist} />
        )
    })

    // list the playlists alphabetically
    const playlistsDropdown = playlists.sort((a, b) => (a.title < b.title) ? -1 : 1)
        // then map through them
        .map(p => {
            return (
                <option value={p._id}>{p.title}</option>
            )
        })

    // redirect to playlist selected
    const playlistClicked = (e) => {
        navigate(`/playlists/${e.target.value}`)
    }

    const displayHeader = title ? (
        // if true, display title and edit button
        <header className="header-container" id="show-playlist-header">
            <div className="header-row row-one-header">
                <h4>PLAYLIST</h4>
                <Button id="edit-playlist-btn" className="float-end" size="sm" onClick={displayEdit}>Edit Playlist</Button>
            </div>
            <div className="header-row row-two-header">
                <h1>{playlist.title}</h1>
                <div id="playlist-dropdown-container">
                    <Form.Select id="playlists-dropdown" onChange={playlistClicked}>
                        <option value={playlistId}>Go to: </option>
                        {playlistsDropdown}
                    </Form.Select>
                </div>
            </div>
        </header>
    ) : (
        // if false, display text to edit title and save/delete buttons
        <header className="header-container" id="show-playlist-header">
            <div className="header-row row-one-header">
                <h4>PLAYLIST</h4>
                <Button id="edit-playlist-btn" className="float-end" size="sm" onClick={displayEdit}>Edit Playlist</Button>
            </div>
            <div className="header-row row-two-header">
                <Form id="editPlaylist">
                    <Form.Control id="edit-playlist-input" value={playlistTitle} onChange={handleTitleChange} />
                    <Button size="sm" id="save-playlist-btn" onClick={editPlaylist}>Save</Button>
                    <Button size="sm" id="delete-playlist-btn" onClick={deletePlaylist}>Delete Playlist</Button>
                </Form>
            </div>
        </header>
    )

    return (
        <div className="page-container" id="show-playlist-page-container">
            {displayHeader}
            <main>
                <ol className="cards-list" id="playlist-vid-res">{getPlaylistVids}</ol>
            </main>
        </div>
    )
}

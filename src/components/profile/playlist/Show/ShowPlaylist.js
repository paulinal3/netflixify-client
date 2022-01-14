import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"

import { destroyPlaylist, getOnePlaylist, updatePlaylist } from "../../../../api/playlist"
import IndexVideos from "./IndexVideos"

export default function ShowPlaylist(props) {

    // grab the current url pattern
    const { pathname } = useLocation()
    // store the playlist id in the url pattern into a variable
    const playlistId = pathname.split('/')[2]
    // console.log('this is the playlist id:', playlistId)

    const [playlist, setPlaylist] = useState({})
    const [playlistVids, setPlaylistVids] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState('')
    const [title, setTitle] = useState(true)

    // render the specified playlist as soon as selected by user
    useEffect(() => {
        // axios call to find the selected playlist in the db
        getOnePlaylist(props.user, playlistId)
            .then(foundPlaylist => {
                console.log('this is the found playlist\n', foundPlaylist.data.playlist)
                // set the found playlist to state
                setPlaylist(foundPlaylist.data.playlist)
                setPlaylistVids(foundPlaylist.data.playlist.videos)
                setPlaylistTitle(foundPlaylist.data.playlist.title)
            })
            .catch(err => console.error)
    }, [playlistId])

    const refreshPlaylist = () => {
        // axios call to find the selected playlist in the db
        getOnePlaylist(props.user, playlistId)
            .then(foundPlaylist => {
                console.log('this is the found playlist\n', foundPlaylist.data.playlist)
                // set the found playlist to state
                setPlaylist(foundPlaylist.data.playlist)
                setPlaylistVids(foundPlaylist.data.playlist.videos)
            })
            .catch(err => console.error)
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
        updatePlaylist(props.user, playlistId, playlistTitle)
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
        destroyPlaylist(props.user, playlistId)
            // redirect back to profile
            .then(() => navigate('/profile'))
            .catch(err => console.error)
    }

    // map over all videos in specified playlist
    const getPlaylistVids = playlistVids.map(v => {
        return (
            // and pass a prop to IndexVideos
            <IndexVideos playlistVids={v} currentUser={props.user} refreshPlaylist={refreshPlaylist} />
        )
    })

    // conditional for what should be displayed
    const displayTitle = title === true ? (
        // if true, display title and edit button
        <div>
            <h1>{playlist.title}</h1>
            <Button onClick={displayEdit}>Edit Playlist</Button>
        </div>
    ) : (
        // if false, display text to edit title and save/delete buttons
        <Form>
            <Form.Control value={playlistTitle} onChange={handleTitleChange} />
            <Button onClick={editPlaylist}>Save</Button>
            <Button onClick={deletePlaylist}>Delete Playlist</Button>
        </Form>
    )

    // list the playlists alphabetically
    const playlistsDropdown = props.playlists.sort((a, b) => (a.title < b.title) ? -1 : 1)
        // then map through them
        .map(p => {
            return (
                <option value={p._id}>{p.title}</option>
            )
        })

    const playlistClicked = (e) => {
        navigate(`/playlists/${e.target.value}`)
    }

    return (
        <div>
            <small>PLAYLIST</small>
            <h1>
                {displayTitle}
            </h1>
            <Form.Select onChange={playlistClicked}>
                <option value={playlistId}>Go to: </option>
                {playlistsDropdown}
            </Form.Select>
            <ol id='playlistVid'>{getPlaylistVids}</ol>
        </div>
    )
}

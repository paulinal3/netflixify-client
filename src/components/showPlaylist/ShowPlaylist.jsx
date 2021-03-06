import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"

import { destroyPlaylist, getOnePlaylist, updatePlaylist } from "../../api/playlist"
import IndexVideos from "./indexVideos/IndexVideos"
import "./showPlaylist.css"
// import PlaylistHeader from "./header/PlaylistHeader"
// import EditTitleForm from "./header/EditTitleForm"

export default function ShowPlaylist({ user, playlists }) {

    const { pathname } = useLocation()
    const playlistId = pathname.split("/")[2]
    // console.log("this is the playlist id:", playlistId)

    const [playlist, setPlaylist] = useState({})
    const [playlistVids, setPlaylistVids] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState("")
    const [title, setTitle] = useState(true)

    // const showPlaylist = () => {
    //     getOnePlaylist(user, playlistId)
    //         .then(foundPlaylist => {
    //             console.log("this is the found playlist\n", foundPlaylist.data.playlist)
    //             setPlaylist(foundPlaylist.data.playlist)
    //             setPlaylistVids(foundPlaylist.data.playlist.videos)
    //             setPlaylistTitle(foundPlaylist.data.playlist.title)
    //         })
    //         .catch(err => console.log(err))
    // }

    // useEffect(showPlaylist(), [playlistId, title])
    const navigate = useNavigate()

    useEffect(() => {
        user ?
            getOnePlaylist(user, playlistId)
                .then(foundPlaylist => {
                    console.log("found playlist\n", foundPlaylist.data.playlist)
                    setPlaylist(foundPlaylist.data.playlist)
                    setPlaylistVids(foundPlaylist.data.playlist.videos)
                    setPlaylistTitle(foundPlaylist.data.playlist.title)
                })
                .catch(err => console.log(err))
        :
            navigate("/sign-in")
    }, [playlistId])

    const refreshPlaylist = () => {
        getOnePlaylist(user, playlistId)
            .then(foundPlaylist => {
                console.log("this is the found playlist\n", foundPlaylist.data.playlist)
                setPlaylist(foundPlaylist.data.playlist)
                setPlaylistVids(foundPlaylist.data.playlist.videos)
            })
            .catch(err => console.log(err))
    }

    const handleTitleChange = (e) => {
        setPlaylistTitle(e.target.value)
    }

    const displayEdit = () => {
        setTitle(!title)
    }

    const editPlaylist = () => {
        updatePlaylist(user, playlistId, playlistTitle)
            .then(() => {
                refreshPlaylist()
                setPlaylistTitle(playlistTitle)
                setTitle(true)
            })
    }

    const deletePlaylist = () => {
        destroyPlaylist(user, playlistId)
            .then(() => navigate("/profile"))
            .catch(err => console.error)
    }

    const getPlaylistVids = playlistVids.map(v => {
        return (
            <IndexVideos key={v._id} video={v} playlistId={playlistId} playlistVids={playlistVids} setPlaylistVids={setPlaylistVids} user={user} />
        )
    })

    // list the playlists alphabetically
    const playlistsDropdown = playlists.sort((a, b) => (a.title < b.title) ? -1 : 1)
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
        <header className="header-container" id="show-playlist-header">
            <div className="header-row row-one-header">
                <h4>PLAYLIST</h4>
                <button id="edit-playlist-btn" className="btn" onClick={displayEdit}>Edit Playlist</button>
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
        <header className="header-container" id="show-playlist-header">
            <div className="header-row row-one-header">
                <h4>PLAYLIST</h4>
                <button id="edit-playlist-btn" className="btn" onClick={displayEdit}>Cancel</button>
            </div>
            <div className="header-row row-two-header">
                <Form id="editPlaylist">
                    <Form.Control id="edit-playlist-input" value={playlistTitle} onChange={handleTitleChange} />
                    <button className="btn" id="save-playlist-btn" onClick={editPlaylist}>Save</button>
                    <button className="btn" id="delete-playlist-btn" onClick={deletePlaylist}>Delete Playlist</button>
                </Form>
            </div>
        </header>
    )

    return (
        <div className="page-container" id="show-playlist-page-container">
            {/* { title ? <PlaylistHeader displayEdit={displayEdit} /> : <EditTitleForm /> } */}
            {displayHeader}
            <main>
                <ol className="cards-list" id="playlist-vid-res">
                    {getPlaylistVids}
                </ol>
            </main>
        </div>
    )
}

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"

import { destroyPlaylist, getOnePlaylist, updatePlaylist } from "../../../../../api/playlist"
import IndexVideos from "./IndexVideos"

export default function ShowPlaylist(props) {

    const [playlist, setPlaylist] = useState({})
    const [playlistVids, setPlaylistVids] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState('')

    // grab the current url pattern
    const { pathname } = useLocation()
    // store the playlist id in the url pattern into a variable
    const playlistId = pathname.split('/')[2]
    // console.log('this is the playlist id:', playlistId)

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
    }, [])

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

    // map over all the videos in the selected playlist state
    // const getPlaylistVids = playlist.videos.map(v => {
    //     console.log('playlist vid\n', playlist.videos)
    //     console.log('this is a video\n', v)
    //     return (
    //         <li key={v._id}>
    //             <img src={v.largeimage} />
    //         </li>
    //         // and pass a prop to IndexVideos
    //         // <IndexVideos playlistVids={v} />
    //     )
    // })

    const handleTitleChange = (e) => {
        setPlaylistTitle(e.target.value)
    }

    const editPlaylist = () => {
        updatePlaylist(props.user, playlistId, playlistTitle)
            .then(() => {
                refreshPlaylist()
                setPlaylistTitle(playlistTitle)
            })
    }

    const navigate = useNavigate()
    
    const deletePlaylist = () => {
        destroyPlaylist(props.user, playlistId)
        // .then(() => {
        //     props.getAllPlaylists()
        // })
        .then(() => navigate('/profile'))
        .catch(err => console.error)
    }

    const getPlaylistVids = playlistVids.map(v => {
        return (
            // and pass a prop to IndexVideos
            <IndexVideos playlistVids={v} currentUser={props.user} refreshPlaylist={refreshPlaylist} />
        )
    })

    return (
        <div>
            <h1>{playlist.title}</h1>
            <Button>Edit Playlist</Button>
            <Form>
                <Form.Control value={playlistTitle} onChange={handleTitleChange} />
                <Button onClick={editPlaylist}>Save</Button>
                <Button onClick={deletePlaylist}>Delete Playlist</Button>
            </Form>
            <ol>{getPlaylistVids}</ol>
        </div>
    )
}

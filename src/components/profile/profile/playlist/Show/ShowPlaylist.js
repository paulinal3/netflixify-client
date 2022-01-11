import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { getOnePlaylist } from "../../../../../api/playlist"
import IndexVideos from "./IndexVideos"

export default function ShowPlaylist(props) {

    const [playlist, setPlaylist] = useState({})
    const [playlistVids, setPlaylistVids] = useState([])

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
            })
            .catch(err => console.error)
    }, [])

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

    const getPlaylistVids = playlistVids.map(v => {
        return (
            // and pass a prop to IndexVideos
            <IndexVideos playlistVids={v} />
        )
    })

    return (
        <div>
            <h1>{playlist.title}</h1>
            <ol>{getPlaylistVids}</ol>
        </div>
    )
}

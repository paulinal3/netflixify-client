import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { getOnePlaylist } from "../../../../../api/playlist"

export default function ShowPlaylist(props) {

    const [playlist, setPlaylist] = useState({})

    const { pathname } = useLocation()
    const playlistId = pathname.split('/')[2]
    // console.log('this is the playlist id:', playlistId)

    useEffect(() => {
        getOnePlaylist(props.user, playlistId)
            .then(foundPlaylist => {
                console.log('this is the found playlist\n', foundPlaylist.data.playlist)
                setPlaylist(foundPlaylist.data.playlist)
            })
            .catch(err => console.error)
    }, [])

    const getPlaylistVids = playlist.videos.map(v => {
        return (
            <li>
                <img src={v.largeimage} />
            </li>
        )
    })

    return (
        <div>
            <h1>{playlist.title}</h1>
            <ol>{getPlaylistVids}</ol>
        </div>
    )
}

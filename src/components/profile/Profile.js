import { useState, useEffect } from "react"

import { getPlaylists } from "../../api/playlist"

export default function Profile(props) {

    const [playlists, setPlaylist] = useState([])

	useEffect(() => {
		getPlaylists(props.user)
		.then(foundPlaylists => {
			console.log(`these are all the current user's playlists \n`, foundPlaylists.data.foundPlaylists)
            setPlaylist(foundPlaylists.data.foundPlaylists)
		})
		.catch(err => console.error)
	}, [])

    const allPlaylists = playlists.map(p => {
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
        </div>
    )
}

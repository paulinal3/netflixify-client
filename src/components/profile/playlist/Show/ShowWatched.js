import { useState, useEffect } from "react"
import { getWatchedVideos } from "../../../../api/video"


export default function ShowWatched(props) {

    const [watchedVids, setWatchedVids] = useState([]) 

    useEffect(() => {
        getWatchedVideos(props.user)
            .then(foundVideos => {
                console.log('these are the watched videos\n', foundVideos.data.video)
                setWatchedVids(foundVideos.data.video)
            })
    }, [])

    const watchedVideos = watchedVids.map(v => {
        return (
            <li>{v.title}</li>
        )
    })

    return (
        <div>
            <small>PLAYLIST</small>
            <h1>Watched</h1>
            <ol>{watchedVideos}</ol>
        </div>
    )
}

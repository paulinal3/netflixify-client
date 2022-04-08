import { useState, useEffect } from "react"
import { getWatchedVideos } from "../../api/video"
import { Card } from "react-bootstrap"

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
            <Card className="bg-dark text-white" style={{ width: '10rem' }}>
                <Card.Img src={v.image} alt={v.title} />
            </Card >
        )
    })

    return (
        <div id='watchedPage'>
            <div id='watchedHeader'>
                <small>ALL</small>
                <h1>Watched</h1>
            </div>
            <ol id='watchedVids'>{watchedVideos}</ol>
        </div>
    )
}

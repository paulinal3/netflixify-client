import { useLocation } from "react-router-dom"

export default function ShowPlaylist() {

    const { pathname } = useLocation()
    const playlistId = pathname.split('/')[2]
    // console.log('this is the playlist id:', playlistId)

    return (
        <div>
            
        </div>
    )
}

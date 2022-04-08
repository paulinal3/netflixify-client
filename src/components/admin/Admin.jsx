import { adminGetApiVids, adminPostApiVids, getVideos } from "../../api/video"

export default function Admin({ user }) {

    const adminVids = () => {
        console.log("clicked")
        for (let i = 59; i < 62; i++) {
            adminGetApiVids(i)
                .then(vidRes => {
                    vidRes.data.ITEMS.forEach(vid => {
                        adminPostApiVids(user, vid)
                    })
                })
        }
    }

    const dbVids = () => {
        getVideos(user)
        .then(res => {
            console.log("res", res)
        })
    }
    

    return (
        <div className="page-container">
            {/* <button onClick={adminVids}>Seed Api Videos</button> */}
            <button onClick={dbVids}>Get Vids</button>
        </div>
    )
}

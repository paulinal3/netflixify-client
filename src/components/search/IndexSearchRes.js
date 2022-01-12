import { Button } from 'react-bootstrap'
import PostSearchRes from './PostSearchRes'

export default function IndexSearchRes(props) {

    // conditional to check if a user is signed in
    const userSignedIn = props.currentUser !== null ? (
        // if a user is, display add to playlist and watched functions
        <div>
            <Button>Watched</Button>
            <PostSearchRes
                indexPlaylists={props.allPlaylists}
                currUser={props.currentUser}
                videoData={props.res}
                refPlaylists={props.refreshPlaylists}
            />
        </div>
        // if not only display watch now function
    ) : (
        <a href={`https://www.netflix.com/title/${props.netflixid}`} target='_blank' rel='noopener noreferrer'><Button>Watch Now</Button></a>
    )

    return (
        <div>
            <li key={props.netflixid}>
                <img src={props.res.image} />
                {/* <div>
                    <button>Watched</button>
                    <PostSearchRes 
                        indexPlaylists={props.allPlaylists} 
                        currUser={props.currentUser} 
                        videoData={props.res}
                        refPlaylists = {props.refreshPlaylists}
                    />
                    </div> */}
                {userSignedIn}
            </li>
        </div>
    )
}

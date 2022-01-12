import { Button, Card } from 'react-bootstrap'
import PostSearchRes from './PostSearchRes'

export default function IndexSearchRes(props) {

    // conditional to check if a user is signed in
    const userSignedIn = props.currentUser !== null ? (
        // if a user is, display add to playlist and watched functions
        <div>
            {/* <Button>Mark as Watched</Button> */}
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.res.image} alt={props.res.title} />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    {userSignedIn}
                    <a href={`https://www.netflix.com/title/${props.res.netflixid}`} target='_blank' rel='noopener noreferrer'><Button variant="primary">Watch Now</Button></a>
                    <Button>See Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

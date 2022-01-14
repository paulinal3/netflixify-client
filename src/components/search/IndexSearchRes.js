import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useState } from 'react'
import PostSearchRes from './PostSearchRes'
import ShowSearchRes from './ShowSearchRes'

import { GrExpand } from 'react-icons/gr'

export default function IndexSearchRes(props) {

    const [modalShow, setModalShow] = useState(false)

    // conditional to check if a user is signed in
    const userSignedIn = props.currentUser !== null ? (
        // if a user is, display add to playlist and watched functions
        <div>
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

    // hover for more details button
    const moreHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            More info
        </Tooltip>
    )

    const testClicked = (e) => {
        console.log('this playlist id was selected:\n', e.target.value)
    }

    return (
        <div id='indexSearchRes'>
            <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={props.res.image} alt={props.res.title} />
                <Card.ImgOverlay>
                    <div id='seeMoreBtn'>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={moreHover}
                        >
                            <Button variant='success' onClick={() => setModalShow(true)}><GrExpand /></Button>
                        </OverlayTrigger>
                    </div>
                </Card.ImgOverlay>
                {/* <Card.Body id='resultCardBody'>
                    <Button onClick={testClicked}>test</Button>
                </Card.Body> */}
            </Card>
            <div id='resultCardBody'>
                {userSignedIn}
            </div>
            <ShowSearchRes
                show={modalShow}
                onHide={() => setModalShow(false)}
                result={props.res}
            />
        </div>
    )
}

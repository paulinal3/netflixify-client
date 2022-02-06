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
    ) : (
        // if not only display watch now function
        <a href={`https://www.netflix.com/title/${props.netflixid}`} target='_blank' rel='noopener noreferrer'><Button variant='success' id='img__description'>Watch Now</Button></a>
    )

    // hover for more details button
    const moreHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            More info
        </Tooltip>
    )

    return (
        <div id='indexSearchRes'>
            <Card id='img__wrap' style={{ width: '13rem' }}>
                <Card.Img variant="top" src={props.res.image} alt={props.res.title} />
                <Card.ImgOverlay>
                    <div id='seeMoreBtn'>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={moreHover}
                        >
                            <Button variant='success' id='img__description' onClick={() => setModalShow(true)}><GrExpand alt='Click for more details' /></Button>
                        </OverlayTrigger>
                    </div>
                    <div id='searchOptions'>
                        {userSignedIn}
                    </div>
                </Card.ImgOverlay>
            </Card>
            {/* <div id='resultCardBody'>
                {userSignedIn}
            </div> */}
            <ShowSearchRes
                show={modalShow}
                onHide={() => setModalShow(false)}
                result={props.res}
            />
        </div>
    )
}

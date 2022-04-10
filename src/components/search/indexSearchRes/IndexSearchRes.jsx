import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useState } from "react"
import PostSearchRes from "./postSearchRes/PostSearchRes"
import ShowSearchRes from "./showSearchRes/ShowSearchRes"

import { GrExpand } from "react-icons/gr"
import { FaPlay } from "react-icons/fa"
import "./indexSearchRes.css"

const style = {
    width: "13rem",
    border: "1px solid #213749",
}

export default function IndexSearchRes(props) {

    const [modalShow, setModalShow] = useState(false)

    const playHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Watch Now
        </Tooltip>
    )

    // conditional to check if a user is signed in
    const userSignedIn = props.currentUser ? (
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
        <div className="play-btn-container">
            <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={playHover}
            >
                <a href={`https://www.netflix.com/title/${props.netflixid}`} target="_blank" rel="noopener noreferrer"><button className="btn" id="img__description"><FaPlay /></button></a>
            </OverlayTrigger>
        </div>
    )

    // hover for more details button
    const moreHover = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            More info
        </Tooltip>
    )

    return (
        <div id="indexSearchRes">
            <Card id="img__wrap" style={style}>
                <Card.Img src={props.res.image} alt={props.res.title} />
                <Card.ImgOverlay>
                    <div id="more-info-btn-container">
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={moreHover}
                        >
                            <button className="btn" id="img__description" onClick={() => setModalShow(true)}><GrExpand alt="Click for more details" /></button>
                        </OverlayTrigger>
                    </div>
                    <div id="searchOptions">
                        {userSignedIn}
                    </div>
                </Card.ImgOverlay>
            </Card>
            <ShowSearchRes
                show={modalShow}
                onHide={() => setModalShow(false)}
                result={props.res}
            />
        </div>

        // <div>
        //     <img src={props.res.image} alt={props.res.title} />
        //     <div>
        //         <OverlayTrigger
        //             placement="left"
        //             delay={{ show: 250, hide: 400 }}
        //             overlay={moreHover}
        //         >
        //             <Button variant="success" onClick={() => setModalShow(true)}><GrExpand alt="Click for more details" /></Button>
        //         </OverlayTrigger>
        //         <div>
        //             {userSignedIn}
        //         </div>
        //     </div>
        // </div>

        // <div id="indexSearchRes">
        //     {/* <div id="img__wrap"> */}
        //         <div className="index-res-card">
        //             <img className="netflix-image" src={props.res.image} alt={props.res.title} />
        //             <div id="seeMoreBtn">
        //                  <OverlayTrigger
        //                      placement="left"
        //                      delay={{ show: 250, hide: 400 }}
        //                      overlay={moreHover}
        //                  >
        //                      <button className="btn" onClick={() => setModalShow(true)}><GrExpand alt="Click for more details" /></button>
        //                  </OverlayTrigger>
        //              </div>
        //             <div id="searchOptions img__description">
        //                 {userSignedIn}
        //             </div>
        //         </div>
        //     {/* </div> */}
        //     <ShowSearchRes
        //         show={modalShow}
        //         onHide={() => setModalShow(false)}
        //         result={props.res}
        //     />
        // </div>

        // <div className="playlist-card">
        //     <div className="playlist-img-container">
        //         <div className="playlist-images">
        //             <img className="single-image" src={props.res.image} alt={props.res.title} />
        //         </div>
        //     </div>
        //     <div id="seeMoreBtn">
        //         <OverlayTrigger
        //             placement="left"
        //             delay={{ show: 250, hide: 400 }}
        //             overlay={moreHover}
        //         >
        //             <Button variant="success" onClick={() => setModalShow(true)}><GrExpand alt="Click for more details" /></Button>
        //         </OverlayTrigger>
        //     </div>
        //     <div id="searchOptions">
        //         {userSignedIn}
        //     </div>
        // </div>
    )
}

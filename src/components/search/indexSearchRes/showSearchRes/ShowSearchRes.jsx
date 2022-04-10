import { Modal, Button } from "react-bootstrap"
import { ImCross } from 'react-icons/im'
import { FaPlay } from "react-icons/fa"

export default function ShowSearchRes(props) {
    return (
        // <div>
        //     <Modal
        //         {...props}
        //         size="lg"
        //         aria-labelledby="contained-modal-title-vcenter"
        //         centered
        //     >
        //         <Modal.Header closeButton className='vidResModal'>
        //             <Modal.Title id="contained-modal-title-vcenter">
        //                 {props.result.title}
        //             </Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body className='vidResModal'>
        //             <p>{props.result.synopsis}</p>
        //             <p>Rating: {props.result.rating}</p>
        //             <small>{props.result.released} {props.result.type}</small>
        //         </Modal.Body>
        //         <Modal.Footer className='vidResModal'>
        //             <a href={`https://www.netflix.com/title/${props.result.netflixid}`} target='_blank' rel='noopener noreferrer'>                    
        //                 <Button variant='success'>
        //                     <FaPlay /> Play
        //                 </Button>
        //             </a>
        //         </Modal.Footer>
        //     </Modal>
        // </div>

        <div className={props.showVideoModal ? "display-show-vid-modal" : "hide-show-vid-modal"}>
            <div className="close-modal-btn">
                <button className="btn" id="close-btn" onClick={() => props.setShowVideoModal(false)}><ImCross /></button>
            </div>
            <div className="modal-body">
                <img className="modal-image" src={props.result.image} />
                <div className="modal-description">
                    <h3>{props.result.title}</h3>
                    <h5>{props.result.synopsis}</h5>
                    {props.result.rating ? 
                    <p>Rating: {props.result.rating}</p>
                    : null }
                    <p>{props.result.released} {props.result.type}</p>
                    <div className="modal-settings">
                        {/* <form onSubmit={watchedClicked}>
                            <button type="submit" className="btn" id="watched-status-btn" value={props.result._id}>{markedWatchedIcon}{markWatched}</button>
                        </form> */}
                        <a href={`https://www.netflix.com/title/${props.result.netflixid}`} target='_blank' rel='noopener noreferrer'>
                            <button className="btn" id="play-btn">
                                <FaPlay /> Play
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

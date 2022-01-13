import { Card, Button, Form, Modal } from "react-bootstrap"

import { FaPlay, FaCheck, FaCheckSquare } from "react-icons/fa"

export default function ShowVideo(props) {

    const markWatched = props.watchedStatus === true ? '  Watched' : '  Mark as Watched'
    const markWatchedIcon = props.watchedStatus === true ? <FaCheck /> : <FaCheckSquare />

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {/* <Card.Img variant="top" src={props.playlistVid.image} /> */}
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.playlistVid.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.playlistVid.synopsis}
                </p>
                <p>Rating: {props.playlistVid.rating}</p>
                <small>{props.playlistVid.released} {props.playlistVid.type}</small>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' value={props.playlistVid._id} onClick={props.watchedClicked}>{markWatchedIcon}{markWatched}</Button>
                <a href={`https://www.netflix.com/title/${props.playlistVid.netflixid}`} target='_blank' rel='noopener noreferrer'>
                    <Button variant='secondary'>
                        <FaPlay /> Play
                    </Button>
                </a>
            </Modal.Footer>
        </Modal>
    )
}

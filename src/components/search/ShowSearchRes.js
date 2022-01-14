import { Modal, Button } from "react-bootstrap"
import { FaPlay } from "react-icons/fa"

export default function ShowSearchRes(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.result.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.result.synopsis}</p>
                    <p>Rating: {props.result.rating}</p>
                    <small>{props.result.released} {props.result.type}</small>
                </Modal.Body>
                <Modal.Footer>
                    <a href={`https://www.netflix.com/title/${props.result.netflixid}`} target='_blank' rel='noopener noreferrer'>                    
                        <Button variant='success'>
                            <FaPlay /> Play
                        </Button>
                    </a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

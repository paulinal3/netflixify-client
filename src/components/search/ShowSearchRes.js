import { Modal, Button } from "react-bootstrap"

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
                    <p>
                        {props.result.synopsis}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <a href={`https://www.netflix.com/title/${props.result.netflixid}`} target='_blank' rel='noopener noreferrer'><Button variant="primary">Watch Now</Button></a>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

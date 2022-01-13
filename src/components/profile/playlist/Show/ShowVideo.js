import { Card, Button, Form, Modal } from "react-bootstrap"

export default function ShowVideo(props) {
    return (
        // <Card style={{ width: '18rem' }}>
        //     {/* <Card.Img variant="top" src={props.playlistVid.image} />
        //     <Card.Body>
        //         <Card.Title>{props.playlistVid.title}</Card.Title>
        //         <Card.Text>
        //             {props.playlistVid.synopsis}
        //         </Card.Text>
        //         <a href={`https://www.netflix.com/title/${props.playlistVid.netflixid}`} target='_blank' rel='noopener noreferrer'><Button variant="primary">Watch Now</Button></a>
        //         <Form>
        //             <Button value={props.playlistVid._id} onClick={props.deleteVideo}>Remove From Playlist</Button>
        //             <Button value={props.playlistVid._id} onClick={props.atchedClicked}>{props.markWatched}</Button>
        //         </Form>
        //     </Card.Body> */}
        //     {/* <li key={props.playlistVids._id}>
        //         <img src={props.playlistVids.image} />
        //         <Form>
        //             <Button value={props.playlistVids._id} onClick={deleteVideo}>Remove From Playlist</Button>
        //             <Button value={props.playlistVids._id} onClick={watchedClicked}>{markWatched}</Button>
        //         </Form>
        //         <a href={`https://www.netflix.com/title/${props.playlistVids.netflixid}`} target='_blank' rel='noopener noreferrer'>Watch Now</a>
        //     </li> */}
        //     <h1>hello</h1>
        // </Card>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.result.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.result.synopsis}
                </p>
            </Modal.Body> */}
            <Modal.Footer>
                {/* <a href={`https://www.netflix.com/title/${props.result.netflixid}`} target='_blank' rel='noopener noreferrer'><Button variant="primary">Watch Now</Button></a> */}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

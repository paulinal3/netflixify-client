
export default function IndexVideos(props) {
    return (
        <div>
            <li key={props.playlistVids._id}>
                <img src={props.playlistVids.largeimage} />
            </li>
        </div>
    )
}

import { Form } from "react-bootstrap"

export default function AdvSearch(props) {

    const advSearchClick = () => {
        props.setAdvancedSearch(!props.advancedSearch)
    }

    const vidBtnClick = () => {
        props.setVideoTypeBtn(!props.videoTypeBtn)
    }

    const videoTypeBtn = props.videoTypeBtn === true ? (
        <Form.Select size="sm">
            <option>Select Video Type</option>
            <option>Movie</option>
            <option>TV Show</option>
        </Form.Select>
    ) : (
        <span></span>
    )

    // conditional to display advanced search options
    const displayAdvSearch = props.advancedSearch === true ? (
        // if true, display checkbox options
        <div key={`inline-$checkbox`} className="mb-3">
            <Form.Check
                inline
                label="Type"
                name="group1"
                type='checkbox'
                id={`inline-$checkbox-1`}
                onClick={vidBtnClick}
            />
            {videoTypeBtn}
            <Form.Check
                inline
                label="Release Date"
                name="group1"
                type='checkbox'
                id={`inline-$checkbox-2`}
            />
            <Form.Check
                inline
                label="Subtitles"
                type='checkbox'
                id={`inline-$checkbox-3`}
            />
        </div>
        // if false, display button
    ) : (
        <span></span>
    )

    return (
        <div>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Advanced Search"
                    onClick={advSearchClick}
                />
            </Form>
            {displayAdvSearch}
        </div>
    )
}

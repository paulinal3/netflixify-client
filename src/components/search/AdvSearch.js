import { Form } from "react-bootstrap"

export default function AdvSearch(props) {

    const advSearchClicked = () => {
        props.setAdvancedSearch(!props.advancedSearch)
    }

    const vidBtnClicked = () => {
        props.setVideoTypeBtn(!props.videoTypeBtn)
    }

    const vidTypeClicked = (e) => {
        props.setVideoType(e.target.value)
    }

    const genreBtnClicked = () => {
        props.setGenresBtn(!props.genresBtn)
    }

    const genreClicked = (e) => {
        props.setGenres(e.target.value)
    }

    const releasedBtnClicked = () => {
        props.setYearReleasedBtn(!props.yearReleasedBtn)
    }

    // conditional for type options
    const displayVidTypes = props.videoTypeBtn === true ? (
        // if true, display video type options
        <Form.Select size="sm" onChange={vidTypeClicked}>
            <option value='Any'>Select Video Type</option>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
        </Form.Select>
        // if false reset state
    ) : (
        props.setVideoType('Any')
    )

    const displayGenres = props.genresBtn === true ? (
        // if true, display video type options
        <Form.Select size="sm" onChange={genreClicked}>
            <option value='Any'>Select Genre</option>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
        </Form.Select>
        // if false reset state
    ) : (
        props.setGenres('Any')
    )

    const displayReleasedInput = props.yearReleasedBtn === true ? (
        // if true, display video type options
        <Form size="sm">
            <input type='text' placeholder='enter year' />
        </Form>
        // if false reset state
    ) : (
        props.setYearReleased(1900)
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
                onClick={vidBtnClicked}
            />
            {displayVidTypes}
            <Form.Check
                inline
                label="Genre"
                name="group1"
                type='checkbox'
                id={`inline-$checkbox-1`}
                onClick={genreBtnClicked}
            />
            {displayGenres}
            <Form.Check
                inline
                label="Release Date"
                name="group1"
                type='checkbox'
                id={`inline-$checkbox-2`}
                onClick={releasedBtnClicked}
            />
            {displayReleasedInput}
            <Form.Check
                inline
                label="Subtitles"
                type='checkbox'
                id={`inline-$checkbox-3`}
            />
        </div>
        // if false, reset all states
    ) : (
        // props.setVideoTypeBtn(false)
        props.setVideoType('Any')
    )

    // const displayAdvSearch = props.advancedSearch
    // if (displayAdvSearch === true) {
    //     return (
    //         <div key={`inline-$checkbox`} className="mb-3">
    //             <Form.Check
    //                 inline
    //                 label="Type"
    //                 name="group1"
    //                 type='checkbox'
    //                 id={`inline-$checkbox-1`}
    //                 onClick={vidBtnClicked}
    //             />
    //             {displayVidTypes}
    //             <Form.Check
    //                 inline
    //                 label="Release Date"
    //                 name="group1"
    //                 type='checkbox'
    //                 id={`inline-$checkbox-2`}
    //             />
    //             <Form.Check
    //                 inline
    //                 label="Subtitles"
    //                 type='checkbox'
    //                 id={`inline-$checkbox-3`}
    //             />
    //         </div>
    //     )
    // } else {
    //     props.setVideoTypeBtn(false)
    //     props.setVideoType('any')
    // }

    return (
        <div>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Advanced Search"
                    onClick={advSearchClicked}
                />
            </Form>
            {displayAdvSearch}
        </div>
    )
}

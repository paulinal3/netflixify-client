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

    const countryBtnClicked = () => {
        props.setCountryBtn(!props.countryBtn)
    }

    const countryClicked = (e) => {
        props.setPickedCountry(e.target.value)
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

    // conditional for genre options
    const displayGenres = props.genresBtn === true ? (
        // if true, display genre options
        <Form.Select size="sm" onChange={genreClicked}>
            <option value='0'>Select Genre</option>
            <option value='1365'>Action & Adventure</option>
            <option value='7424'>Anime</option>
            <option value='783'>Children & Family Movies</option>
            <option value='31574'>Classic Movies</option>
            <option value='6548'>Comedies</option>
            <option value='7627'>Cult Movies</option>
            <option value='6839'>Documentaries</option>
            <option value='5763'>Dramas</option>
            <option value='26835'>Faith & Spirituality</option>
            <option value='7462'>Foreign Movies</option>
            <option value='5977'>Gay & Lesbian Movies</option>
            <option value='8711'>Horror Movies</option>
            <option value='7077'>Independent Movies</option>
            <option value='1701'>Music</option>
            <option value='8883'>Romantic Movies</option>
            <option value='1492'>Sci-Fi & Fantasy</option>
            <option value='4370'>Sports Movies</option>
            <option value='8933'>Thrillers</option>
            <option value='83'>TV Shows</option>
        </Form.Select>
        // if false reset state
    ) : (
        props.setGenres('0')
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

    const displayCountryOptions = props.allCountries.map(c => {
        return (
            <option value={c.id}>{c.country}</option>
        )
    })

    const displayCountries = props.countryBtn === true ? (
        <Form.Select size='sm' onChange={countryClicked}>
            <option>Select Country</option>
            {displayCountryOptions}
        </Form.Select>
    ) : (
        props.setPickedCountry('78')
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
            <Form.Check
                inline
                label="Country"
                type='checkbox'
                id={`inline-$checkbox-3`}
                onClick={countryBtnClicked}
            />
            {displayCountries}
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

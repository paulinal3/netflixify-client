import { Form } from "react-bootstrap"
import Subtitles from "../../data/Subtitles"

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

    const endDateBtnClicked = () => {
        props.setEndYearBtn(!props.endYearBtn)
    }
    
    const handleDateInput = (e) => {
        props.setYearReleased(e.target.value)
    }

    const handleEndDateInput = (e) => {
        props.setEndReleasedDate(e.target.value)
    }

    const countryBtnClicked = () => {
        props.setCountryBtn(!props.countryBtn)
    }

    const countryClicked = (e) => {
        props.setPickedCountry(e.target.value)
    }

    const subtitleBtnClicked = () => {
        props.setSubtitlesBtn(!props.subtitlesBtn)
    }

    const subtitleClicked = (e) => {
        props.setSubtitles(e.target.value)
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

    // conditional for start date input
    const displayReleasedInput = props.yearReleasedBtn === true ? (
        // if true, display video type options
        <Form size="sm">
            <input type='text' placeholder='Year > 1900' onChange={handleDateInput} />
        </Form>
    ) : (
        // if false reset state
        props.setYearReleased('1900')
    )

    // conditional for end date input
    const displayEndInput = props.endYearBtn === true ? (
        // if true, display video type options
        <Form size="sm">
            <input type='text' placeholder='Year < 2022' onChange={handleEndDateInput} />
        </Form>
    ) : (
        // if false reset state
        props.setYearReleased('2022')
    )

    // map through countries state
    const displayCountryOptions = props.allCountries.map(c => {
        return (
            <option value={c.id}>{c.country}</option>
        )
    })

    // conditional for different counties
    const displayCountries = props.countryBtn === true ? (
        // if true, display dropdown of country options
        <Form.Select size='sm' onChange={countryClicked}>
            <option>Select Country</option>
            {displayCountryOptions}
        </Form.Select>
    ) : (
        // if false, reset state
        props.setPickedCountry('78')
    )

    // map through all subtitles
    const displaySubtitleOptions = Subtitles.languages.map(s => {
        return (
            <option value={s}>{s}</option>
        )
    })

    // conditional for subtitles
    const displaySubtitles = props.subtitlesBtn === true ? (
        // if true, display dropdown of subtitle options
        <Form.Select size='sm' onChange={subtitleClicked}>
            <option>Select Language</option>
            {displaySubtitleOptions}
        </Form.Select>
    ) : (
        // if false, reset state
        props.setSubtitles('Any')
    )

    // conditional to display advanced search options
    const displayAdvSearch = props.advancedSearch
    // if true, display checkbox options
    if (displayAdvSearch === true) {
        return (
            <div id='advSearchOptions'>
                <Form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Advanced Search"
                        onClick={advSearchClicked}
                    />
                </Form>
                <div key={`inline-$checkbox`} id='options' className="mb-3">
                    <div>
                        <Form.Check
                            inline
                            label="Type"
                            name="group1"
                            type='checkbox'
                            id={`inline-$checkbox-1`}
                            onClick={vidBtnClicked}
                        />
                        {displayVidTypes}
                    </div>
                    <div>
                        <Form.Check
                            inline
                            label="Genre"
                            name="group1"
                            type='checkbox'
                            id={`inline-$checkbox-1`}
                            onClick={genreBtnClicked}
                        />
                        {displayGenres}
                    </div>
                    <div>
                        <Form.Check
                            inline
                            label="Start Year"
                            name="group1"
                            type='checkbox'
                            id={`inline-$checkbox-2`}
                            onClick={releasedBtnClicked}
                        />
                        {displayReleasedInput}
                    </div>
                    <div>
                        <Form.Check
                            inline
                            label="End Year"
                            name="group1"
                            type='checkbox'
                            id={`inline-$checkbox-2`}
                            onClick={endDateBtnClicked}
                        />
                        {displayEndInput}
                    </div>
                    <div>
                        <Form.Check
                            inline
                            label="Subtitles"
                            type='checkbox'
                            id={`inline-$checkbox-3`}
                            onClick={subtitleBtnClicked}
                        />
                        {displaySubtitles}
                    </div>
                    <div>
                        <Form.Check
                            inline
                            label="Country"
                            type='checkbox'
                            id={`inline-$checkbox-3`}
                            onClick={countryBtnClicked}
                        />
                        {displayCountries}
                    </div>
                </div>
            </div>
        )
        // if false, reset all states
    } else {
        props.setVideoTypeBtn(false)
        props.setVideoType('Any')
        props.setGenresBtn(false)
        props.setGenres('0')
        props.setYearReleasedBtn(false)
        props.setYearReleased('1900')
        props.setEndYearBtn(false)
        props.setEndReleasedDate('2022')
        props.setCountryBtn(false)
        props.setPickedCountry('78')
        props.setSubtitlesBtn(false)
        props.setSubtitles('Any')
    }

    return (
        <div id='advSearch'>
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

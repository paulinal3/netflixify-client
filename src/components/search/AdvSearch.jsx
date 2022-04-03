import { Form } from "react-bootstrap"
import Countries from "../../data/Countries"
import Genres from "../../data/Genres"
import Subtitles from "../../data/Subtitles"

export default function AdvSearch(props) {

    const { advSearchBtns, searchToggle, advSearchToggle, advSearchBtnClick, advSearchDatesInput, advSearchOptionsInput } = props

    // conditional for type options
    const displayVidTypes = advSearchBtns.vidType ? (
        // if true, display video type options
        <Form.Select size="sm" onChange={advSearchOptionsInput}>
            <option name="vidType" value='Any'>Select Video Type</option>
            <option name="vidType" value='movie'>Movie</option>
            <option name="vidType" value='series'>Series</option>
        </Form.Select>
        // if false reset state
    ) : (
        // setAdvSearch({
        //     ...advSearch,
        //     vidType: "Any"
        // })
        null
    )

    const genreOptions = Genres.map(genre => {
        return (
            <option name="genre" value={genre.id}>{genre.name}</option>
        )
    })

    // conditional for genre options
    const displayGenres = advSearchBtns.genre ? (
        // if true, display genre options
        <Form.Select size="sm" onChange={advSearchOptionsInput}>
            {genreOptions}
        </Form.Select>
        // if false reset state
    ) : (
        // setAdvSearch({
        //     ...advSearch,
        //     genre: "0"
        // })
        null
    )

    // conditional for start date input
    const displayReleasedInput = advSearchBtns.startDate ? (
        // if true, display video type options
        <Form size="sm">
            <input name="startDate" type='text' placeholder='Year > 1900' onChange={advSearchDatesInput} />
        </Form>
    ) : (
        // if false reset state
        // setAdvSearch({
        //     ...advSearch,
        //     startDate: "1900"
        // })
        null
    )

    // conditional for end date input
    const displayEndInput = advSearchBtns.endDate ? (
        // if true, display video type options
        <Form size="sm">
            <input name="endDate" type='text' placeholder='Year < 2022' onChange={advSearchDatesInput} />
        </Form>
    ) : (
        // if false reset state
        // setAdvSearch({
        //     ...advSearch,
        //     endDate: "2022"
        // })
        null
    )

    const countryOptions = Countries.map(country => {
        return (
            <option name="country" value={country.id}>{country.country}</option>
        )
    })

    // conditional for different counties
    const displayCountries = advSearchBtns.country ? (
        // if true, display dropdown of country options
        <Form.Select size='sm' onChange={advSearchOptionsInput}>
            {countryOptions}
        </Form.Select>
    ) : (
        // if false, reset state
        // setAdvSearch({
        //     ...advSearch,
        //     country: "78"
        // })
        null
    )

    // map through all subtitles
    const displaySubtitleOptions = Subtitles.languages.map(s => {
        return (
            <option name="subtitles" value={s}>{s}</option>
        )
    })

    // conditional for subtitles
    const displaySubtitles = advSearchBtns.subtitles ? (
        // if true, display dropdown of subtitle options
        <Form.Select size='sm' onChange={advSearchOptionsInput}>
            <option name="subtitles" value="Any">Select Language</option>
            {displaySubtitleOptions}
        </Form.Select>
    ) : (
        // if false, reset state
        // setAdvSearch({
        //     ...advSearch,
        //     subtitles: "Any"
        // })
        null
    )

    return (
        <>
            {
                advSearchToggle ?
                    <div id='advSearchOptions'>
                        <Form>
                            <Form.Check
                                name="advSearchToggle"
                                type="switch"
                                id="custom-switch"
                                label="Advanced Search"
                                onClick={searchToggle}
                            />
                        </Form>
                        <div key={`inline-$checkbox`} id='options' className="mb-3">
                            <div>
                                <Form.Check
                                    inline
                                    label="Type"
                                    name="vidType"
                                    type='checkbox'
                                    id={`inline-$checkbox-1`}
                                    onClick={advSearchBtnClick}
                                />
                                {displayVidTypes}
                            </div>
                            <div>
                                <Form.Check
                                    inline
                                    label="Genre"
                                    name="genre"
                                    type='checkbox'
                                    id={`inline-$checkbox-1`}
                                    onClick={advSearchBtnClick}
                                />
                                {displayGenres}
                            </div>
                            <div>
                                <Form.Check
                                    inline
                                    label="Start Year"
                                    name="startDate"
                                    type='checkbox'
                                    id={`inline-$checkbox-2`}
                                    onClick={advSearchBtnClick}
                                />
                                {displayReleasedInput}
                            </div>
                            <div>
                                <Form.Check
                                    inline
                                    label="End Year"
                                    name="endDate"
                                    type='checkbox'
                                    id={`inline-$checkbox-2`}
                                    onClick={advSearchBtnClick}
                                />
                                {displayEndInput}
                            </div>
                            <div>
                                <Form.Check
                                    inline
                                    label="Subtitles"
                                    name="subtitles"
                                    type='checkbox'
                                    id={`inline-$checkbox-3`}
                                    onClick={advSearchBtnClick}
                                />
                                {displaySubtitles}
                            </div>
                            <div>
                                <Form.Check
                                    inline
                                    label="Country"
                                    name="country"
                                    type='checkbox'
                                    id={`inline-$checkbox-3`}
                                    onClick={advSearchBtnClick}
                                />
                                {displayCountries}
                            </div>
                        </div>
                    </div>
                    :
                    <div id='advSearch'>
                        <Form>
                            <Form.Check
                                name="advSearchToggle"
                                type="switch"
                                id="custom-switch"
                                label="Advanced Search"
                                onClick={searchToggle}
                            />
                        </Form>
                        {/* {displayAdvSearch} */}
                    </div>
            }
        </>
    )
}

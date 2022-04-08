import { Form } from "react-bootstrap"
import Countries from "../../../data/Countries"
import Genres from "../../../data/Genres"
import Subtitles from "../../../data/Subtitles"

export default function AdvSearch(props) {

    const { advSearchBtns, searchToggle, advSearchToggle, advSearchBtnClick, advSearchDatesInput, advSearchOptionsInput } = props

    const genreOptions = Genres.map(genre => {
        return (
            <option name="genre" value={genre.id}>{genre.name}</option>
        )
    })

    const subtitleOptions = Subtitles.languages.map(s => {
        return (
            <option name="subtitles" value={s}>{s}</option>
        )
    })

    const countryOptions = Countries.map(country => {
        return (
            <option name="country" value={country.id}>{country.country}</option>
        )
    })

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
                                {
                                    advSearchBtns.vidType ?
                                        <Form.Select size="sm" onChange={advSearchOptionsInput}>
                                            <option name="vidType" value='Any'>Select Video Type</option>
                                            <option name="vidType" value='movie'>Movie</option>
                                            <option name="vidType" value='series'>Series</option>
                                        </Form.Select>
                                        : null
                                }
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
                                {
                                    advSearchBtns.genre ?
                                        <Form.Select size="sm" onChange={advSearchOptionsInput}>
                                            {genreOptions}
                                        </Form.Select>
                                        : null
                                }
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
                                {
                                    advSearchBtns.startDate ?
                                        <Form size="sm">
                                            <input name="startDate" type='text' placeholder='Year > 1900' onChange={advSearchDatesInput} />
                                        </Form>
                                        : null
                                }
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
                                {
                                    advSearchBtns.endDate ?
                                        <Form size="sm">
                                            <input name="endDate" type='text' placeholder='Year < 2022' onChange={advSearchDatesInput} />
                                        </Form>
                                        : null
                                }
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
                                {
                                    advSearchBtns.subtitles ?
                                        <Form.Select size='sm' onChange={advSearchOptionsInput}>
                                            <option name="subtitles" value="Any">Select Language</option>
                                            {subtitleOptions}
                                        </Form.Select>
                                        : null
                                }
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
                                {
                                    advSearchBtns.country ?
                                        <Form.Select size='sm' onChange={advSearchOptionsInput}>
                                            {countryOptions}
                                        </Form.Select>
                                        : null
                                }
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
                    </div>
            }
        </>
    )
}

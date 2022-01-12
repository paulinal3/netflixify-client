import { Form } from "react-bootstrap"
import AdvSearch from "./AdvSearch"

export default function SearchBar(props) {
    return (
        <Form onSubmit={props.searchTermVids}>
            <Form.Group controlId='searchTerm'>
                <Form.Label>Search: </Form.Label>
                <Form.Control
                    type='text'
                    name='searchTerm'
                    placeholder='enter keyword'
                    value={props.searchTerm}
                    onChange={props.handleSearchTermChange}
                />
            </Form.Group>
            <AdvSearch 
                advancedSearch={props.advSearch}
                setAdvancedSearch={props.setAdvSearch}

                videoTypeBtn={props.vidTypeBtn}
                setVideoTypeBtn={props.setVidTypeBtn}
                videoType={props.vidType}
                setVideoType={props.setVidType}

                genresBtn={props.genreBtn}
                setGenresBtn={props.setGenreBtn}
                genres={props.genre}
                setGenres={props.setGenre}

                yearReleasedBtn={props.releasedBtn}
                setYearReleasedBtn={props.setReleasedBtn}
                yearReleased={props.released}
                setYearReleased={props.setReleased}

                countryBtn={props.countriesBtn}
                setCountryBtn={props.setCountriesBtn}
                pickedCountry={props.selectedCountry}
                setPickedCountry={props.setSelectedCountry}
                allCountries={props.countries}
            />
                <Form.Control type='submit' value='Search' />
        </Form>
    )
}

// import { Button, Form } from "react-bootstrap"
// import AdvSearch from "./AdvSearch"

// export default function SearchBar(props) {
//     return (
//         <Form onSubmit={props.searchTermVids}>
//             <Form.Group id='search' controlId='searchTerm'>
//                 <Form.Control
//                     type='text'
//                     name='searchTerm'
//                     placeholder='Type keyword'
//                     value={props.searchTerm}
//                     onChange={props.handleSearchTermChange}
//                 />
//                 <Button id='searchBtn' type='submit' variant='success'>Search</Button>
//             </Form.Group>
//             <div id='advSearchToggle'>
//                 <AdvSearch
//                     advancedSearch={props.advSearch}
//                     setAdvancedSearch={props.setAdvSearch}

//                     videoTypeBtn={props.vidTypeBtn}
//                     setVideoTypeBtn={props.setVidTypeBtn}
//                     videoType={props.vidType}
//                     setVideoType={props.setVidType}

//                     genresBtn={props.genreBtn}
//                     setGenresBtn={props.setGenreBtn}
//                     genres={props.genre}
//                     setGenres={props.setGenre}

//                     yearReleasedBtn={props.releasedBtn}
//                     setYearReleasedBtn={props.setReleasedBtn}
//                     yearReleased={props.released}
//                     setYearReleased={props.setReleased}

//                     endYearBtn={props.endDateBtn}
//                     setEndYearBtn={props.setEndDateBtn}
//                     endReleasedDate={props.endDate}
//                     setEndReleasedDate={props.setEndDate}

//                     countryBtn={props.countriesBtn}
//                     setCountryBtn={props.setCountriesBtn}
//                     pickedCountry={props.selectedCountry}
//                     setPickedCountry={props.setSelectedCountry}
//                     allCountries={props.countries}

//                     subtitlesBtn={props.subtitleBtn}
//                     setSubtitlesBtn={props.setSubtitleBtn}
//                     setSubtitles={props.setSubtitle}
//                     subtitles={props.subtitle}
//                 />
//             </div>
//         </Form>
//     )
// }

import { Button, Form } from "react-bootstrap"
import AdvSearch from "./AdvSearch"

export default function SearchBar({ searchTerm, handleSearchTermChange, searchVids, advSearch, setAdvSearch, advSearchBtns, setAdvSearchBtns, searchToggle, advSearchToggle }) {
    
    return (
        <Form onSubmit={searchVids}>
            <Form.Group id='search' controlId='searchTerm'>
                <Form.Control
                    type='text'
                    name='searchTerm'
                    placeholder='Type keyword'
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <Button id='searchBtn' type='submit' variant='success'>Search</Button>
            </Form.Group>
            <div id='advSearchToggle'>
                <AdvSearch
                    advSearch={advSearch}
                    setAdvSearch={setAdvSearch}
                    advSearchBtns={advSearchBtns}
                    setAdvSearchBtns={setAdvSearchBtns}
                    searchToggle={searchToggle}
                    advSearchToggle={advSearchToggle}
                />
            </div>
        </Form>
    )
}
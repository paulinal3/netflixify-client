import { Button, Form } from "react-bootstrap"
import AdvSearch from "../advSearch/AdvSearch"
import "./searchBar.css"

export default function SearchBar(props) {
    const { 
        searchTerm, 
        handleSearchTermChange, 
        searchVids, 
        advSearchBtns, 
        searchToggle, 
        advSearchToggle, 
        advSearchBtnClick, 
        advSearchDatesInput, 
        advSearchOptionsInput 
    } = props

    return (
        <Form onSubmit={searchVids}>
            <Form.Group id="search" controlId="search-term">
                <Form.Control
                    type="text"
                    name="searchTerm"
                    placeholder="Type keyword"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <button id="search-btn" type="submit" variant="success">Search</button>
            </Form.Group>
            <div id="advSearchToggle">
                <AdvSearch
                    advSearchBtns={advSearchBtns}
                    searchToggle={searchToggle}
                    advSearchToggle={advSearchToggle}
                    advSearchBtnClick={advSearchBtnClick}
                    advSearchDatesInput={advSearchDatesInput}
                    advSearchOptionsInput={advSearchOptionsInput}
                />
            </div>
        </Form>
    )
}
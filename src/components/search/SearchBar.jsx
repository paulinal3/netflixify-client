import { Button, Form } from "react-bootstrap"
import AdvSearch from "./AdvSearch"

export default function SearchBar(props) {

    const { searchTerm, handleSearchTermChange, searchVids, advSearchBtns, searchToggle, advSearchToggle, advSearchBtnClick, advSearchDatesInput, advSearchOptionsInput } = props

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
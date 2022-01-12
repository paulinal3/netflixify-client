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
            />
                <Form.Control type='submit' value='Search' />
        </Form>
    )
}

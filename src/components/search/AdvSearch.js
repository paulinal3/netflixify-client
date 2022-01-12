import { Form, Button } from "react-bootstrap"

export default function AdvSearch(props) {

    const advSearchClick = (e) => {
        props.setAdvancedSearch(!props.advancedSearch)
    }
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
            />
            <Form.Check
                inline
                label="Release Date"
                name="group1"
                type='checkbox'
                id={`inline-$checkbox-2`}
            />
            <Form.Check
                inline
                label="Subtitles"
                type='checkbox'
                id={`inline-$checkbox-3`}
            />
            <Button onClick={advSearchClick}>Close</Button>
        </div>
        // if false, display button
    ) : (
        <Button onClick={advSearchClick}>Advanced Search</Button>
    )
    
    return (
        <div>
            {displayAdvSearch}
        </div>
    )
}

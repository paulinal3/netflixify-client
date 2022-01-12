import { Form, Button } from "react-bootstrap"

export default function AdvSearch(props) {

    const displayAdvSearch = props.advancedSearch === true ? (
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
        </div>
    ) : (
        <Button>Advanced Search</Button>
    )
    
    return (
        <div>
            {displayAdvSearch}
            {/* <Button>Advanced Search</Button> */}
            {/* <div key={`inline-$checkbox`} className="mb-3">
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
            </div> */}
        </div>
    )
}

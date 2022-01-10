import { useState } from 'react'

import { getSearchTermRes } from '../../api/external'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState('')
    // const allNetflixVids = props.netflixVids.map((vid, i) => {
    //     return (
    //         <li>
    //             <img src={vid.image} />
    //         </li>
    //     )
    // })

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const searchTermVids = (e) => {
        e.preventDefault()
        getSearchTermRes(searchTerm)
            .then(videos => {
                console.log('thesea re the videos based on search term\n', videos)
            })
            .catch(err => console.error)
    }

    // const searchRes = props.

    return (
        <div>
            <h1>Search Page</h1>
            <form onSubmit={searchTermVids}>
                <label id='searchTerm'>Search:</label>
                <input
                    htmlFor='searchTerm'
                    type='text'
                    name='searchTerm'
                    placeholder='enter keyword'
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <button>Search</button>
            </form>
            {/* <ol>{allNetflixVids}</ol> */}
        </div>
    )
}

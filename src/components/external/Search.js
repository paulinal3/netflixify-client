import { useState } from 'react'

import { getSearchTermRes } from '../../api/external'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchRes, setSearchRes] = useState([])
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
                console.log(`these are the videos based on search term: ${searchTerm}\n`, videos)
                setSearchRes(videos.data.ITEMS)
            })
            .catch(err => console.error)
    }

    const allSearchRes = searchRes.map(res => {
        return (
            <li key={res.netflixid}>
                <img src={res.image} />
                <button>Watched</button>
                <form>
                    <label>Add to Playlist:</label>
                    <select>
                        
                    </select>
                </form>
            </li>
        )
    })

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
            <ol>{allSearchRes}</ol>
            {/* <ol>{allNetflixVids}</ol> */}
        </div>
    )
}

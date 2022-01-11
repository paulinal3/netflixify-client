import { useState } from 'react'

import { getSearchTermRes } from '../../api/external'
import IndexSearchRes from './IndexSearchRes'
import SearchBar from './SearchBar'

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
        // console.log(e)
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
            <IndexSearchRes res={res} key={res.netflixid} />
        )
    })

    return (
        <div>
            <h1>Search Page</h1>
            <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} searchTermVids={searchTermVids} />
            <ol>{allSearchRes}</ol>
            {/* <ol>{allNetflixVids}</ol> */}
        </div>
    )
}

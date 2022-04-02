import { useState } from 'react'

import { getSearchTermRes } from '../../api/external'
import IndexSearchRes from './IndexSearchRes'
import SearchBar from './SearchBar'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchRes, setSearchRes] = useState([])
    const [advSearchToggle, setAdvSearchToggle] = useState(false)
    const [advSearchBtns, setAdvSearchBtns] = useState({
        vidType: false,
        genre: false,
        startDate: false,
        endDate: false,
        subtitles: false,
        country: false
    })
    const [advSearch, setAdvSearch] = useState({
        vidType: "Any",
        genre: "0",
        startDate: "1900",
        endDate: "2022",
        subtitles: "Any",
        country: "78"
    })

    const { vidType, genre, startDate, endDate, subtitles, country } = advSearch

    const handleSearchTermChange = (e) => setSearchTerm(e.target.value)

    const searchVids = (e) => {
        e.preventDefault()
        getSearchTermRes(searchTerm, vidType, genre, country, subtitles, startDate, endDate)
            .then(videos => {
                console.log(`${searchTerm} video search res \n`, videos.data)
                setSearchRes(videos.data.ITEMS)
            })
            .catch(err => console.log(err))
    }

    const displaySearchRes = searchRes.map(res => {
        return (
            <IndexSearchRes
                key={res.netflixid}
                res={res} 
                netflixid={res.netflixid} 
                allPlaylists={props.playlists} 
                currentUser={props.user} 
                refreshPlaylists={props.getAllPlaylists}
            />
        )
    })
    
    const searchToggle = () => {
        setAdvSearchToggle(!advSearchToggle)
        if (advSearchToggle) {
            setAdvSearchBtns({
                vidType: false,
                genre: false,
                startDate: false,
                endDate: false,
                country: false,
                subtitles: false
            })
            setAdvSearch({
                vidType: "Any",
                genre: "0",
                startDate: "1900",
                endDate: "2022",
                country: "78",
                subtitles: "Any"
            })
        }
    }

    return (
        <div id='searchPage'>
            <SearchBar 
                searchTerm={searchTerm} 
                handleSearchTermChange={handleSearchTermChange} 
                searchVids={searchVids}
                advSearch={advSearch}
                setAdvSearch={setAdvSearch}
                advSearchBtns={advSearchBtns}
                setAdvSearchBtns={setAdvSearchBtns}
                searchToggle={searchToggle}
                advSearchToggle={advSearchToggle}
            />
            <hr />
            <div id='searchResContainer'>
                <ol id='searchResult'>{displaySearchRes}</ol>
            </div>
        </div>
    )
}

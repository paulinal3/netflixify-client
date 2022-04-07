import { useState } from 'react'

import { getSearchTermRes } from '../../api/external'
import IndexSearchRes from './IndexSearchRes'
import SearchBar from './SearchBar'

export default function Search({ user, getAllPlaylists, playlists, netflixVids }) {

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

    const allNetflixVids = netflixVids.map(vid => {
        return (
            <IndexSearchRes
            key={vid._id}
            res={vid} 
            netflixid={vid.netflixid} 
            allPlaylists={playlists} 
            currentUser={user} 
            refreshPlaylists={getAllPlaylists}
        />
        )
    })

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
                allPlaylists={playlists} 
                currentUser={user} 
                refreshPlaylists={getAllPlaylists}
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

    const advSearchBtnClick = (e) => {
        setAdvSearchBtns({
            ...advSearchBtns,
            [e.target.name]: !advSearchBtns[e.target.name]
        })
        if (advSearchBtns.vidType) {
            setAdvSearch({
                ...advSearch,
                vidType: "Any"
            })
        }
        if (advSearchBtns.genre) {
            setAdvSearch({
                ...advSearch,
                genre: "0"
            })
        }
        if (advSearchBtns.startDate) {
            setAdvSearch({
                ...advSearch,
                startDate: "1990"
            })
        }
        if (advSearchBtns.endDate) {
            setAdvSearch({
                ...advSearch,
                endDate: "2022"
            })
        }
        if (advSearchBtns.subtitles) {
            setAdvSearch({
                ...advSearch,
                subtitles: "Any"
            })
        }
        if (advSearchBtns.country) {
            setAdvSearch({
                ...advSearch,
                country: "78"
            })
        }
    }

    const advSearchDatesInput = (e) => {
        setAdvSearch({
            ...advSearch,
            [e.target.name]: e.target.value
        })
    }

    const advSearchOptionsInput = (e) => {
        setAdvSearch({
            ...advSearch,
            [e.target[0].attributes[0].value]: e.target.value
        })
    }

    return (
        <div id='searchPage'>
            <SearchBar 
                searchTerm={searchTerm} 
                handleSearchTermChange={handleSearchTermChange} 
                searchVids={searchVids}

                advSearchBtns={advSearchBtns}
                searchToggle={searchToggle}
                advSearchToggle={advSearchToggle}
                advSearchBtnClick={advSearchBtnClick}
                advSearchDatesInput={advSearchDatesInput}
                advSearchOptionsInput={advSearchOptionsInput}
            />
            <hr />
            <div id='searchResContainer'>
                {/* {allNetflixVids} */}
                <ol id='searchResult'>{displaySearchRes}</ol>
            </div>
        </div>
    )
}

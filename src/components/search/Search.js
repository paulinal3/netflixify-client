import { useEffect, useState } from 'react'

import { getCountries, getSearchTermRes } from '../../api/external'
import IndexSearchRes from './IndexSearchRes'
import SearchBar from './SearchBar'

export default function Search(props) {

    // passed to SearchBar as a prop
    const [searchTerm, setSearchTerm] = useState('')
    const [searchRes, setSearchRes] = useState([])
    // passed to AdvSearch as a prop
    const [advSearch, setAdvSearch] = useState(false)
    const [vidTypeBtn, setVidTypeBtn] = useState(false)
    const [vidType, setVidType] = useState('Any')
    const [genreBtn, setGenreBtn] = useState(false)
    const [genre, setGenre] = useState('0')
    const [releasedBtn, setReleasedBtn] = useState(false)
    const [released, setReleased] = useState(1900)
    const [countriesBtn, setCountriesBtn] = useState(false)
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('78')
    const [subtitleBtn, setSubtitleBtn] = useState(false)
    const [subtitle, setSubtitle] = useState('Any')

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

    // helper method to find netflix shows based on search term
    const searchTermVids = (e) => {
        e.preventDefault()
        // axios call to external api
        getSearchTermRes(searchTerm, vidType, genre, selectedCountry, subtitle)
            .then(videos => {
                console.log(`these are the videos based on search term: ${searchTerm}\n`, videos.data)
                setSearchRes(videos.data.ITEMS)
                // setVidType('any')
            })
            .catch(err => console.error)
    }

    useEffect(() =>{
        getCountries()
            .then(foundCountries => {
                console.log('these are the countries\n', foundCountries.data.results)
                setCountries(foundCountries.data.results)
            })
    }, [])

    // map through all videos found in state
    const allSearchRes = searchRes.map(res => {
        return (
            // and pass to IndexSearchRes as a prop
            <IndexSearchRes
                res={res} 
                netflixid={res.netflixid} 
                allPlaylists={props.playlists} 
                currentUser={props.user} 
                refreshPlaylists={props.getAllPlaylists}
            />
        )
    })

    return (
        <div>
            <h1>Search Page</h1>
            <SearchBar 
                searchTerm={searchTerm} 
                handleSearchTermChange={handleSearchTermChange} 
                searchTermVids={searchTermVids}

                advSearch={advSearch}
                setAdvSearch={setAdvSearch}

                vidTypeBtn={vidTypeBtn}
                setVidTypeBtn={setVidTypeBtn}
                vidType={vidType}
                setVidType={setVidType}

                genreBtn={genreBtn}
                setGenreBtn={setGenreBtn}
                genre={genre}
                setGenre={setGenre}

                releasedBtn={releasedBtn}
                setReleasedBtn={setReleasedBtn}
                released={released}
                setReleased={setReleased}

                countriesBtn={countriesBtn}
                setCountriesBtn={setCountriesBtn}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countries={countries}

                subtitleBtn={subtitleBtn}
                setSubtitleBtn={setSubtitleBtn}
                setSubtitle={setSubtitle}
                subtitle={subtitle}
            />
            <ol id='searchResult'>{allSearchRes}</ol>
            {/* <ol>{allNetflixVids}</ol> */}
        </div>
    )
}

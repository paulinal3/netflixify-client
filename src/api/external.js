import axios from 'axios'
const rootAPI = 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi'
const apiHost = 'unogs-unogs-v1.p.rapidapi.com'

// <-------------------- uNoGS API --------------------> //
// index all videos on US Netflix
export const getNetflixVideos = () => {
    return axios({
        method: 'GET',
        url: `${rootAPI}?q=&cl=78&p=2&t=ns&st=adv`,
        headers: {
            'X-RapidAPI-Host': `${apiHost}`,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
    })
}

// index videos based on search term
export const getSearchTermRes = (searchTerm, vidType, genre) => {
    console.log(`${rootAPI}?q=${searchTerm}-!1900,2022-!0,5-!0,10-!0-!${vidType}-!Any-!Any-!gt0&t=ns&cl=78&st=adv&ob=relevance&p=1&sa=or`)
    return axios({
        method: 'GET',
        url: `${rootAPI}?q=${searchTerm}-!1900,2022-!0,5-!0,10-!${genre}-!${vidType}-!Any-!Any-!gt0&t=ns&cl=78&st=adv&ob=relevance&p=1&sa=or`,
        headers: {
            'X-RapidAPI-Host': `${apiHost}`,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
    })
}

// index all netflix countries
// export const getCountries = () => {
//     return axios({
//         method: 'GET',
//         url: `${rootAPI}?t=lc&q=available`,
//         headers: {
//             'X-RapidAPI-Host': `${apiHost}`,
//             'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
//         }
//     })
// }

// <-------------------- unogsNG API --------------------> //
export const getCountries = () => {
    return axios({
        method: 'GET',
        url: `https://unogsng.p.rapidapi.com/countries`,
        headers: {
            'X-RapidAPI-Host': `unogsng.p.rapidapi.com`,
            'X-RapidAPI-Key': process.env.REACT_APP_UNOGSNG_KEY
        }
    })
}
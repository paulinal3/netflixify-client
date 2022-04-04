import axios from "axios";
import apiUrl from "../apiConfig";

export const getVideos = (user) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/videos`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const getAdminVideos = () => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/admin/vids`,
    })
}

export const getPlaylistVideos = (user, playlistId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/${playlistId}/videos`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const getOneVideo = (user, videoId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/videos/${videoId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const getWatchedVideos = (user) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/videos/watched`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const postVideo = (user, playlistId, vidData) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/${playlistId}/videos`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            video: {
                title: vidData.title,
                synopsis: vidData.synopsis,
                netflixid: vidData.netflixid,
                image: vidData.image,
                largeimage: vidData.largeimage,
                type: vidData.type,
                runtime: vidData.runtime,
                released: vidData.released,
                rating: vidData.rating,
                imdbid: vidData.imdbid
            }
        }
    })
}

export const updateVideo = (user, videoId, watchedStatus) => {
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/videos/${videoId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            video: {
                watched: !watchedStatus
            }
        }
    })
}

export const destroyVideo = (user, playlistId, videoId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/${playlistId}/videos/${videoId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const adminGetApiVids = (i) => {
    return axios({
        method: "GET",
        url: `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=-!1900,2022-!0,5-!0,10-!0-!Any-!Any-!Any-!gt0&t=ns&cl=78&st=adv&ob=relevance&p=${i}&sa=or`,
        headers: {
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_ADMIN_KEY,
        }
    })
} 

export const adminPostApiVids = (user, vidData) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/${user._id}/admin/videos`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            video: {
                title: vidData.title,
                synopsis: vidData.synopsis,
                netflixid: vidData.netflixid,
                image: vidData.image,
                largeimage: vidData.largeimage,
                type: vidData.type,
                runtime: vidData.runtime,
                released: vidData.released,
                rating: vidData.rating,
                imdbid: vidData.imdbid
            }
        }
    })
}

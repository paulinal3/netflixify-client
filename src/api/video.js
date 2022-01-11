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

export const updateVideo = (user, videoId) => {
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/videos/${videoId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            video: {
                watched: true
            }
        }
    })
}

export const destroyVideo = (user, videoId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/videos/${videoId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
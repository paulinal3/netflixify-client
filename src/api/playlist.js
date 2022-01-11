import axios from "axios";
import apiUrl from "../apiConfig";

export const getPlaylists = (user) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/playlists`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const getOnePlaylist = (user, playlistId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/playlists/${playlistId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const postPlaylist = (user, newPlaylist) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/playlists`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            playlist: {
                title: newPlaylist
            }
        }
    })
}

export const updatePlaylist = (user, playlistId, changePlaylist) => {
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/playlists/${playlistId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            playlist: {
                title: changePlaylist
            }
        }
    })
}

export const destroyPlaylist = (user, playlistId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/playlists/${playlistId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
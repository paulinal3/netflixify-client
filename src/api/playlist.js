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
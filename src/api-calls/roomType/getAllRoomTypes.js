import { API_URL } from "../api-url"
import axios from 'axios'

export const getAllRoomTypes = async(token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'roomTypes/getTypes',
            params: {
                token:token,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
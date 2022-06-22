import { API_URL } from "../api-url"
import axios from 'axios'

export const getBookedRoom = async(token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'room/getBookedRoom',
            params: {
                token:token,
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
import { API_URL } from "../api-url"
import axios from 'axios'

export const getBookedRoomByName = async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'room/getBookedRoomByName',
            params: {
                token: data.token,
                name: data.name
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
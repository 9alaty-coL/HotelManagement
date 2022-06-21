import axios from 'axios'
import {API_URL} from '../api-url'

export const getAllRoom =  async(token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'room/getRooms',
            params: {
                token: token,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
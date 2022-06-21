import axios from 'axios'
import {API_URL} from '../api-url'

export const addRoomType =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: API_URL + 'roomTypes/addType',
            data: {
                token: data.token,
                type: data.type,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
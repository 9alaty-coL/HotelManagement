import axios from 'axios'
import {API_URL} from '../api-url'

export const deleteRoomType =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'roomTypes/deleteType',
            data: {
                token: data.token,
                type: data.type
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
import axios from 'axios'
import {API_URL} from '../api-url'

export const updateRoomType =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'put',
            url: API_URL + 'roomTypes/updateType',
            data: {
                token: data.token,
                oldType: data.oldType,
                newType: data.newType,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
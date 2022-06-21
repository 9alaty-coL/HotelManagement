import axios from 'axios'
import {API_URL} from '../api-url'

export const getRoomById =  async(id, token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'room/getRoomById',
            params: {
                token: token,
                roomId: id,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
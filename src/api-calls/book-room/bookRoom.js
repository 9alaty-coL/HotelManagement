import axios from 'axios'
import {API_URL} from '../api-url'

export const bookRoom =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: API_URL + 'room/bookRoom',
            data: {
                token: data.token,
                roomId: data.roomId,
                customerName: data.customerName,
                time: data.time
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
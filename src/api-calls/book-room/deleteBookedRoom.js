import axios from 'axios'
import {API_URL} from '../api-url'

export const deleteBookedRoom =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'room/deleteCustomerInfo',
            data: {
                token: data.token,
                name: data.name
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
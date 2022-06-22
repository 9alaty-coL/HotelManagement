import axios from 'axios'
import {API_URL} from '../api-url'

export const changeBookedRoom =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'put',
            url: API_URL + 'room/changeCustomerInfo',
            data: {
                token: data.token,
                name: data.name,
                oldName: data.oldName,
                time: data.time,
                customer: data.customer
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
import axios from 'axios'
import {API_URL} from '../api-url'

export const deleteService =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'service/deleteService',
            data: {
                token: data.token,
                name: data.name
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
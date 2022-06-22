import axios from 'axios'
import {API_URL} from '../api-url'

export const addService =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: API_URL + 'service/addService',
            data: {
                token: data.token,
                name: data.name,
                description: data.description,
                price: data.price,
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
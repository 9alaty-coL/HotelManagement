import axios from 'axios'
import {API_URL} from '../api-url'

export const updateService =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'put',
            url: API_URL + 'service/updateService',
            data: {
                token: data.token,
                oldName: data.oldName,
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
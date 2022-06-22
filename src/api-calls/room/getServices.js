import axios from 'axios'
import {API_URL} from '../api-url'

export const getAllService =  async(token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'service/getServices',
            params: {
                token: token,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }
}
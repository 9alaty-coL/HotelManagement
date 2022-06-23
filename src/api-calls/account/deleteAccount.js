import axios from 'axios'
import {API_URL} from '../api-url'

export const deleteAccount =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + 'auth/delete',
            data: {
                token: data.token,
                username: data.username
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
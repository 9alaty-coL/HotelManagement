import axios from 'axios'
import {API_URL} from '../api-url'

export const updateAccount =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'put',
            url: API_URL + 'auth/update',
            data: {
                token: data.token,
                oldUsername: data.oldUsername,
                username: data.username,
                password: data.password,
                name: data.name,
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
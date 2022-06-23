import axios from 'axios'
import {API_URL} from '../api-url'

export const addAccount =  async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: API_URL + 'auth/add',
            data: {
                token: data.token,
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
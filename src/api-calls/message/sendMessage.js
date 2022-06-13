import {API_URL} from '../api-url'
import axios from 'axios'

export const sendMessage = async data => {
    try {
        const res = await axios({
            method: 'post',
            url: API_URL + 'mess/send',
            data: {
                token: data.token,
                senderId: data.senderId,
                recieverId: data.recieverId,
                message: data.message,
            }
        })
        return res.data
    } catch (error) {
        throw(new Error(error.response.data.message))        
    }
}
import {API_URL} from '../api-url'
import axios from 'axios'

export const updateRoom = async data => {
    try {
        const res = await axios({
            method: 'put',
            url: API_URL + 'room/updateRoom2',
            data: {
                token: data.token,
                ...data.newRoom,
            }
        })
        return res.data
    } catch (error) {
        throw(new Error(error.response?.data?.message))        
    }
}
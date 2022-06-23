import {API_URL} from '../api-url'
import axios from 'axios'

export const addBill = async data => {
    try {
        console.log({
            token: data.token,
            ...data.newBill,
        })
        const res = await axios({
            method: 'post',
            url: API_URL + 'bill/addBill',
            data: {
                token: data.token,
                ...data.newBill,
            }
        })
        return res.data
    } catch (error) {
        throw(new Error(error.response?.data?.message))        
    }
}
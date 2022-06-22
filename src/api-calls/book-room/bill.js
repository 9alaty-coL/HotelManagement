import axios from 'axios'
import {API_URL} from '../api-url'

export const getBills =  async(token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'bill',
            params:{token: token}
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export const getBillById = async(token, billId) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'bill/getBill',
            params:{token: token,id: billId},
            
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
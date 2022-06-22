import { API_URL } from "../api-url"
import axios from 'axios'

export const getSelectedRooms = async(data) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + 'room/getSelectedRooms',
            params: {
                token: data.token,
                status: data.status,
                state: data.state,
                type: data.type
            }
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}
import axios from "axios"

const getAllMessage = async (token) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: 'http://localhost:8000/mess',
            data: {
                token: token,
            }
        })

        return res.data
    } catch (err) {
        throw(new Error(res.response.data.message))
    }
}

export default getAllMessage
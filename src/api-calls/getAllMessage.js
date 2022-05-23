import axios from "axios"

const getAllMessage = async (token) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            url: 'https://api-hotman.herokuapp.com/mess',
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
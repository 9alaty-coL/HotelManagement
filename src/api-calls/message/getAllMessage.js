import axios from "axios"

const getAllMessage = async (token, recieverId) => {
    let res = null
    try {
        res = await axios({
            method: 'post',
            // url: 'https://api-hotman.herokuapp.com/api/mess',
            url: 'http://localhost:8000/api/mess/messages',
            data: {
                token: token,
                recieverId: recieverId,
            }
        })

        return res.data
    } catch (err) {
        throw(new Error(res.response.data.message))
    }
}

export default getAllMessage
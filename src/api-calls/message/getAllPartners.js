import axios from "axios"

const getAllPartners = async (token) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            // url: 'https://api-hotman.herokuapp.com/api/mess/partners',
            url: 'http://localhost:8000/api/mess/partners',
            params: {
                token: token,
            }
        })
        return res.data
    } catch (err) {
        throw(new Error(err.response.data.message))
    }

}

export default getAllPartners
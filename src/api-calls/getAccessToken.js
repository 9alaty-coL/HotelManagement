import axios from "axios"

const getAccessToken = async (data) => {

    let res = null
    try {
        res = await axios({
            method: 'post',
            url: 'https://api-hotman.herokuapp.com/auth',
            // url: 'http://localhost:8000/auth',
            data: {
                username: data.username,
                password: data.password,
            },
        })
        data.dispatch(res.data.AUTH_TOKEN)
    } catch (err) {
        // console.log(err)
        throw(new Error(err.response.data.message))
    }
}
export default getAccessToken
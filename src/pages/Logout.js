import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Logout = () => {
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        logout()
        navigate('/auth')
    }, []);
    return <></>
}

export default Logout
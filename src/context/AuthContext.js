import { createContext, useState } from "react";
import { useJwt } from "react-jwt";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    _id: '',
    username: '',
    name: '',
    isAdmin: false,
    login: (token) => {},
    logout: () => {},
})

export const AuthContextProvider = props => {
    const [token, setToken] = useState(localStorage.getItem('HOTMAN_AUTH_TOKEN') || '')
    const { decodedToken, isExpired } = useJwt(token);

    const userIsLoggedIn = !!token
    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('HOTMAN_AUTH_TOKEN', token)
    }
    const logoutHandler = () => {
        setToken('')
        localStorage.removeItem('HOTMAN_AUTH_TOKEN')
    }
    const _id = decodedToken?.data?._id
    const username = decodedToken?.data?.username
    const name = decodedToken?.data?.name
    const isAdmin = decodedToken?.data?.role
    const contextValue = {
        token: token,
        _id: _id,
        username: username,
        isAdmin: isAdmin,
        name: name,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext
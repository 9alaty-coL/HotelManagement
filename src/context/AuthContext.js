import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})

export const AuthContextProvider = props => {
    const [token, setToken] = useState(localStorage.getItem('HOTMAN_AUTH_TOKEN') || '')
    const userIsLoggedIn = !!token
    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('HOTMAN_AUTH_TOKEN', token)
    }
    const logoutHandler = () => {
        setToken('')
        localStorage.removeItem('HOTMAN_AUTH_TOKEN')
    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext
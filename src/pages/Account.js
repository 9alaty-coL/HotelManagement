import classes from "./css/ServiceList.module.scss"
import NavBar from "../components/navbar/NavBar"
import AccountPage from "../components/account/AccountPage"

const Account = () => {
    return <div className={classes.main}>
        <NavBar />
        <AccountPage />
    </div>
}

export default Account
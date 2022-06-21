import classes from "./css/ServiceList.module.scss"
import NavBar from "../components/navbar/NavBar"
import ServiceListPage from "../components/service-list/ServiceListPage"

const ServiceList = () => {
    return <div className={classes.main}>
        <NavBar />
        <ServiceListPage />
    </div>
}

export default ServiceList
import classes from "./css/ServiceList.module.scss"
import NavBar from "../components/navbar/NavBar"
import ServiceListPage from "../components/service-list/ServiceListPage"

const ServiceList = () => {
    return <>
        <NavBar />
        <ServiceListPage />
    </>
}

export default ServiceList
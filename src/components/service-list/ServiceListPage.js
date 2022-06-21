import classes from "./ServiceListPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

import { useContext, useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { useQuery } from "react-query"
import AuthContext from "../../context/AuthContext"
import {getAllService} from "../../api-calls/service/getAllService"

const datas = [
    {_id: 123, index: 1, name: "", description: "", price:"1 000 000đ"},
    {_id: 345, index: 2, name: "", description: "", price:"1 000 000đ"},
    {_id: 678, index: 3, name: "", description: "", price:"1 000 000đ"},

]
    
const ServiceListPage = () =>{

    const authContext = useContext(AuthContext)
    
    let services = useQuery('getServices',getAllService.bind(null, authContext.token))
    let listServices
   
    if (services.isLoading){
        listServices = <CircularProgress size={"25px"} />
    }
    else if (services.isError){
        listServices = <span style={{color: 'red'}}>{}</span>
    }
    else if (services.isSuccess){
        
        listServices = 
        (
            <div className={classes.main}>
                <Navbar refetch={services.refetch}/>
                <HeadRow/> 
                {services.data.map((data, index) => (
                    <BookRow 
                        key={data.name} 
                        number={index} 
                        name={data.name} 
                        description={data.description}
                        price={data.price}
                        refetch={services.refetch}>
                    </BookRow>))
                }
            </div>    
        )
    }

    return listServices 
}


export default ServiceListPage
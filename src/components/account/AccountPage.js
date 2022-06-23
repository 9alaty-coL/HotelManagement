import classes from "./AccountPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

import { useContext, useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { useQuery } from "react-query"
import AuthContext from "../../context/AuthContext"
import {getAllAccount} from "../../api-calls/account/getAllAccount"

    
const AccountPage = () =>{

    const authContext = useContext(AuthContext)
    
    let services = useQuery('getAccounts',getAllAccount.bind(null, authContext.token))
    let listAccounts
   
    if (services.isLoading){
        listAccounts = <CircularProgress size={"25px"} />
    }
    else if (services.isError){
        listAccounts = <span style={{color: 'red'}}>{}</span>
    }
    else if (services.isSuccess){
        
        listAccounts = 
        (
            <div className={classes.main}>
                <Navbar refetch={services.refetch}/>
                <HeadRow/> 
                {services.data.map((data, index) => (
                    <BookRow 
                        key={data.username} 
                        number={index} 
                        name={data.name} 
                        username={data.username}
                        password={data.password}
                        isAdmin = {data.isAdmin}
                        refetch={services.refetch}>
                    </BookRow>))
                }
            </div>    
        )
    }

    return listAccounts 
}


export default AccountPage
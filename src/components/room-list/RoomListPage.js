import classes from "./RoomListPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

import { useContext, useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { useQuery } from "react-query"
import AuthContext from "../../context/AuthContext"
import {getAllRoomTypes} from "../../api-calls/roomType/getAllRoomTypes"    
    
const RoomList = () =>{
    const authContext = useContext(AuthContext)
    
    let roomTypes = useQuery('getRoomTypes',getAllRoomTypes.bind(null, authContext.token))
    let listRoomTypes
   
    if (roomTypes.isLoading){
        listRoomTypes = <CircularProgress size={"25px"} />
    }
    else if (roomTypes.isError){
        listRoomTypes = <span style={{color: 'red'}}>{}</span>
    }
    else if (roomTypes.isSuccess){
        
        listRoomTypes = 
        (
            <div className={classes.main}>
                <Navbar refetch={roomTypes.refetch}/>
                <HeadRow/> 
                {roomTypes.data.map((data, index) => (
                    <BookRow 
                        key={data.type} 
                        number={index} 
                        type={data.type} 
                        refetch={roomTypes.refetch}>
                    </BookRow>))
                }
            </div>    
        )
    }

    return listRoomTypes 
}

export default RoomList
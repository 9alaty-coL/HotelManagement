import classes from "./BookroomPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

import { useContext} from "react"
import { CircularProgress } from "@mui/material"
import { useQuery } from "react-query"
import AuthContext from "../../context/AuthContext"
import {getBookedRoom} from "../../api-calls/book-room/get-booked-room"
    

const BookroomPage = () =>{
    const authContext = useContext(AuthContext)
    const bookedRoom = useQuery('getBookedRoom', getBookedRoom.bind(null, authContext.token));

    let listBookedRoom
    if (bookedRoom.isLoading){
        listBookedRoom = <CircularProgress size={"25px"} />
    }
    else if (bookedRoom.isError){
        listBookedRoom = <span style={{color: 'red'}}>{}</span>
    }
    else if (bookedRoom.isSuccess){
        console.log("Okay" + bookedRoom)
        listBookedRoom = 
        (
            <div className={classes.main}>
            <Navbar/>
            <HeadRow/>
                {bookedRoom.data.map((data, index) => (
                <BookRow 
                    key={data.name} 
                    number={index + 1} 
                    customerName={data.customer} 
                    bookDay={data.time.substring(0, 10)}
                    roomName={data.name}>
                </BookRow>))
                } 
            </div>    
        )
    }

    return listBookedRoom 
}

export default BookroomPage
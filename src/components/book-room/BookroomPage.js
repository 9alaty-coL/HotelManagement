import classes from "./BookroomPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"
import Pagination from "./Pagination.js"

import { useContext, useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"
import { useQuery } from "react-query"
import AuthContext from "../../context/AuthContext"
import {getBookedRoom} from "../../api-calls/book-room/get-booked-room"
import {getBookedRoomByName} from "../../api-calls/book-room/get-search-booked-room"
    
const BookroomPage = () =>{
    const authContext = useContext(AuthContext)
    
    let bookedRoom = useQuery('getBookedRoom', getBookedRoom.bind(null, authContext.token));
    let listBookedRoom
    let bookedRoomByPage
    let pageMax
    const [page, setPage] = useState(1)
    
    const [searchInput, setSearchInput] = useState('')
    let searchData = useQuery('getBookedRoomByName', getBookedRoomByName.bind(null, {token: authContext.token, name: searchInput}));

    useEffect(()=>{
        if (searchInput !== ""){
            searchData.refetch()
        }
    }, [searchInput])
    
    if (bookedRoom.isLoading){
        listBookedRoom = <CircularProgress size={"25px"} />
    }
    else if (bookedRoom.isError){
        listBookedRoom = <span style={{color: 'red'}}>{}</span>
    }
    else if (searchData.isSuccess && searchInput !== "" && searchData.data !== undefined && searchData.data.message === undefined) {
        listBookedRoom = 
        (
            <div className={classes.main}>
            <Navbar value={searchInput} refetch={bookedRoom.refetch} setSearchInput={setSearchInput}/>
            <HeadRow/>
                {searchData.data.map((data, index) => (
                <BookRow 
                    key={data.name} 
                    number={index + 1} 
                    customerName={data.customer} 
                    bookDay={data.time.substring(0, 10)}
                    roomName={data.name}
                    refetch={bookedRoom.refetch}>
                </BookRow>))
                } 
            </div>    
        )
    }
    else if (bookedRoom.isSuccess){
        pageMax = parseInt(((bookedRoom.data.length - 1) / 10) + 1)
        bookedRoomByPage = bookedRoom.data.slice((page - 1) * 10, (page - 1) * 10 + 10)

        listBookedRoom = 
        (
            <div className={classes.main}>
                <Navbar value={searchInput} refetch={bookedRoom.refetch} setSearchInput={setSearchInput}/>
                <HeadRow/>
                {bookedRoomByPage.map((data, index) => (
                <BookRow 
                    key={data.name} 
                    number={index + (page - 1) * 10 + 1} 
                    customerName={data.customer} 
                    bookDay={data?.time?.substring(0, 10)}
                    roomName={data.name}
                    refetch={bookedRoom.refetch}>
                </BookRow>))
                }
                <Pagination pageNumber={page} pageMax={pageMax} setPage={setPage}/>
            </div>    
        )
    }

    return listBookedRoom 
}

export default BookroomPage
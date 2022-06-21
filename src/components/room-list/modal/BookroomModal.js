import classes from "./BookroomModal.module.scss"
import Modal from "../../UI/Modal"
import RoomTypeInfoRow from "./RoomTypeInfoRow"
import { faClipboardList} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import OptionSelect from "../../UI/OptionSelect"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {addRoomType}  from "../../../api-calls/roomType/addRoomType"
import AuthContext from "../../../context/AuthContext"

const BookroomModal = props => {
    const authContext = useContext(AuthContext)
    const roomTypeRef = useRef()

    const bookRoomMutate = useMutation(addRoomType)
   
    useEffect(()=>{
        if (bookRoomMutate.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    }, [bookRoomMutate.isSuccess])

    const submitHandler = e => {
        e.preventDefault()

        bookRoomMutate.mutate({
            token: authContext.token,
            type: roomTypeRef.current.value,
        })
    }


    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Thêm loại phòng</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.customerInfo}>
                        <span>Tên loại phòng</span>
                        <RoomTypeInfoRow required ref={roomTypeRef} icon={faClipboardList} placeholder="Nhập tên loại phòng" />
                    </div>
                </div>
                <div className={classes.btnGroup}>
                    <Button disabled={bookRoomMutate.isLoading }
                        variant="contained" color="success" type="submit">
                        {bookRoomMutate.isLoading ? <CircularProgress size={'25px'}/> :'Thêm'}
                    </Button>
                    <Button disabled={bookRoomMutate.isLoading} 
                        variant="contained" style={{backgroundColor:"#888", marginLeft:"5px"}} 
                        onClick={props.onBackdropClick}>Hủy
                    </Button>
                </div>
            </form>
        </div>
    </Modal>
}

export default BookroomModal
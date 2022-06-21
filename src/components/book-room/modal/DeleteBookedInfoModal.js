import classes from "./DeleteBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import {useContext, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {deleteBookedRoom}  from "../../../api-calls/book-room/deleteBookedRoom"
import {getAllRoom} from "../../../api-calls/book-room/get-all-room"
import AuthContext from "../../../context/AuthContext"

const DeleteBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const deleteBookedRoomMutate = useMutation(deleteBookedRoom)
    const rooms = useQuery('getRooms',getAllRoom.bind(null, authContext.token))

    useEffect(()=>{
        if (deleteBookedRoomMutate.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    }, [deleteBookedRoomMutate.isSuccess])

    const submitHandler = e => {
        e.preventDefault()

        deleteBookedRoomMutate.mutate({
            token: authContext.token,
            name: props.roomName
        })
    }

    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Xóa bỏ đặt phòng</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Phòng {props.roomName}</span>
                        <span>{props.customerName}</span>
                    </div>
                </div>
                <div className={classes.btnGroup}>
                    <Button className={classes.btnSingle} disabled={rooms.isLoading || deleteBookedRoomMutate.isLoading} variant="contained" color="warning" type="submit">{deleteBookedRoomMutate.isLoading ? <CircularProgress size={'25px'}/> :'Xóa bỏ'}</Button>
                    <Button className={classes.btnSingle} disabled={rooms.isLoading || deleteBookedRoomMutate.isLoading} variant="contained" style={{backgroundColor:"#888", marginLeft:"5px"}} onClick={props.onBackdropClick}>Hủy</Button>
                </div>
            </form>
        </div>
    </Modal>
}

export default DeleteBookedRoomModal
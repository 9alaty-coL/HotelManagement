import classes from "./EditBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import RoomTypeInfoRow from "./RoomTypeInfoRow"
import { faClipboardList} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {updateRoomType}  from "../../../api-calls/roomType/updateRoomType"  
import AuthContext from "../../../context/AuthContext"

const EditBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const roomTypeRef = useRef()
    const changeBookedRoomMutate = useMutation(updateRoomType)
   

    useEffect(()=>{
        if (changeBookedRoomMutate.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    }, [changeBookedRoomMutate.isSuccess])

    const submitHandler = e => {
        e.preventDefault()

        changeBookedRoomMutate.mutate({
            token: authContext.token,
            oldType: props.type,
            newType: roomTypeRef.current.value
        })
    }


    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Cập nhật</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Loại phòng: {props.type}</span>
                        <RoomTypeInfoRow required ref={roomTypeRef} icon={faClipboardList} placeholder="Nhập tên loại phòng mới" />
                    </div>
                </div>
                <div className={classes.btnGroup}>
                    <Button className={classes.btnSingle} disabled={changeBookedRoomMutate.isLoading} variant="contained" color="success" type="submit" onClick={props.onSubmitChange}>{changeBookedRoomMutate.isLoading ? <CircularProgress size={'25px'}/> :'Cập nhật'}</Button>
                    <Button className={classes.btnSingle} disabled={changeBookedRoomMutate.isLoading} variant="contained" style={{backgroundColor:"#888", marginLeft:"5px"}} onClick={props.onBackdropClick}>Hủy</Button>
                </div>
            </form>
        </div>
    </Modal>
}

export default EditBookedRoomModal
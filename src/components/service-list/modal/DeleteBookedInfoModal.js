import classes from "./DeleteBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import {useContext, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {deleteService}  from "../../../api-calls/service/deleteService"  
import AuthContext from "../../../context/AuthContext"

const DeleteBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const deleteBookedRoomMutate = useMutation(deleteService)

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
            name: props.name,
        })
    }

    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Xóa loại phòng</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Dịch vụ: {props.name}</span>
                    </div>
                </div>
                <div className={classes.btnGroup}>
                    <Button className={classes.btnSingle} disabled={deleteBookedRoomMutate.isLoading} variant="contained" color="warning" type="submit">{deleteBookedRoomMutate.isLoading ? <CircularProgress size={'25px'}/> :'Xóa'}</Button>
                    <Button className={classes.btnSingle} disabled={deleteBookedRoomMutate.isLoading} variant="contained" style={{backgroundColor:"#888", marginLeft:"5px"}} onClick={props.onBackdropClick}>Hủy</Button>
                </div>
            </form>
        </div>
    </Modal>
}

export default DeleteBookedRoomModal
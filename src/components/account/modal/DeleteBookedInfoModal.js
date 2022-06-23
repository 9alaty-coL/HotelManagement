import classes from "./DeleteBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import {useContext, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {deleteAccount}  from "../../../api-calls/account/deleteAccount"  
import AuthContext from "../../../context/AuthContext"

const DeleteBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const deleteBookedRoomMutate = useMutation(deleteAccount)

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
            username: props.username,
        })
    }

    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Xóa tài khoản</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Tài khoản: {props.username}</span>
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
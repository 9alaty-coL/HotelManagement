import classes from "./EditBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import RoomTypeInfoRow from "./RoomTypeInfoRow"
import DescriptionRow from "./DescriptionRow"
import { faUser, faInfo, faP, faWarehouse} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {updateAccount}  from "../../../api-calls/account/updateAccount"  
import AuthContext from "../../../context/AuthContext"

const EditBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const usernameRef = useRef()
    const pwRef = useRef()
    const nameRef = useRef()
    const changeBookedRoomMutate = useMutation(updateAccount)
   

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
            oldUsername: props.username,
            username: usernameRef.current.value,
            password: pwRef.current.value,
            name: nameRef.current.value,
        })
    }


    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Cập nhật</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Tài khoản: {props.username}</span>
                        
                        <span>Tên tài khoản</span>
                        <RoomTypeInfoRow required ref={usernameRef} icon={faUser} placeholder="VD: user123" />
                        <span>Mật khẩu</span>
                        <RoomTypeInfoRow required ref={pwRef} icon={faP} placeholder="Vd: 12345" />
                        <span>Họ và tên</span>
                        <RoomTypeInfoRow required ref={nameRef} icon={faInfo} placeholder="VD: Nguyễn Văn A" />
                        <span>Quyền Hạn</span>
                        <RoomTypeInfoRow  icon={faWarehouse} value={"Nhân viên"} disabled={true}/>
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
import classes from "./BookroomModal.module.scss"
import Modal from "../../UI/Modal"
import RoomTypeInfoRow from "./RoomTypeInfoRow"
import DescriptionRow from "./DescriptionRow"
import { faUser, faInfo, faP, faWarehouse} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import OptionSelect from "../../UI/OptionSelect"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {addAccount}  from "../../../api-calls/account/addAccount"
import AuthContext from "../../../context/AuthContext"

const BookroomModal = props => {
    const authContext = useContext(AuthContext)
    const usernameRef = useRef()
    const pwRef = useRef()
    const nameRef = useRef()

    const bookRoomMutate = useMutation(addAccount)
   
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
            username: usernameRef.current.value,
            password: pwRef.current.value,
            name: nameRef.current.value,
        })
    }


    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Thêm tài khoản</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.customerInfo}>
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
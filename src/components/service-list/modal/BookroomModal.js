import classes from "./BookroomModal.module.scss"
import Modal from "../../UI/Modal"
import RoomTypeInfoRow from "./RoomTypeInfoRow"
import DescriptionRow from "./DescriptionRow"
import { faClipboardList, faInfo, faDollarSign} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import OptionSelect from "../../UI/OptionSelect"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {addService}  from "../../../api-calls/service/addService"
import AuthContext from "../../../context/AuthContext"

const BookroomModal = props => {
    const authContext = useContext(AuthContext)
    const serviceRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    const bookRoomMutate = useMutation(addService)
   
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
            name: serviceRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value,
        })
    }


    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Thêm dịch vụ</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.customerInfo}>
                        <span>Tên dịch vụ</span>
                        <RoomTypeInfoRow required ref={serviceRef} icon={faClipboardList} placeholder="Nhập tên loại phòng" />
                        <span>Mô tả</span>
                        <DescriptionRow required ref={descRef} icon={faInfo} placeholder="Mô tả ngắn gọn dịch vụ" />
                        <span>Giá cả</span>
                        <RoomTypeInfoRow required ref={priceRef} icon={faDollarSign} placeholder="VD: 1 500 000đ" />
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
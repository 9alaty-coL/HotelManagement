import classes from "./EditBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import RoomTypeInfoRow from "./RoomTypeInfoRow"
import DescriptionRow from "./DescriptionRow"
import { faClipboardList, faInfo, faDollarSign} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {updateService}  from "../../../api-calls/service/updateService"  
import AuthContext from "../../../context/AuthContext"

const EditBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const roomTypeRef = useRef()
    const serviceRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()
    const changeBookedRoomMutate = useMutation(updateService)
   

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
            oldName: props.type,
            name: serviceRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value,
        })
    }


    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Cập nhật</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Dich vụ: {props.name}</span>
                        
                        <span>Tên dịch vụ</span>
                        <RoomTypeInfoRow required ref={serviceRef} icon={faClipboardList} placeholder="Nhập tên mới cho dịch vụ" />
                        <span>Mô tả</span>
                        <DescriptionRow required ref={descRef} icon={faInfo} placeholder="Nhập mô tả mới cho dịch vụ" />
                        <span>Giá cả</span>
                        <RoomTypeInfoRow required ref={priceRef} icon={faDollarSign} placeholder="VD: 1 500 000đ" />
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
import classes from "./BookroomModal.module.scss"
import Modal from "../../UI/Modal"
import CustomerInfoRow from "./CustomerInfoRow"
import { faUser, faIdCard, faPhone, faAddressBook, faEarth,faSortNumericDesc, faCalendar, faClock,} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import OptionSelect from "../../UI/OptionSelect"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {bookRoom}  from "../../../api-calls/book-room/bookRoom"
import {getAllRoom} from "../../../api-calls/book-room/get-all-room"
import AuthContext from "../../../context/AuthContext"

const BookroomModal = props => {
    const authContext = useContext(AuthContext)
    const [choosedRoom, setChoosedRoom] = useState(-1)
    const userRef = useRef()
    // const idCardRef = useRef()
    // const phoneRef = useRef()
    // const addressBookRef = useRef()
    // const earthRef = useRef()
    const bookRoomMutate = useMutation(bookRoom)
    const rooms = useQuery('getRooms',getAllRoom.bind(null, authContext.token))

    useEffect(()=>{
        if (bookRoomMutate.isSuccess){
            props.onBackdropClick()
        }
    }, [bookRoomMutate.isSuccess, props])

    const submitHandler = e => {
        e.preventDefault()
        // const roomIndex = rooms.data.find(v => v.name === choosedRoom)
        // if (!roomIndex){
        //     return;
        // }
        const roomId = roomsFiltered[choosedRoom]._id

        bookRoomMutate.mutate({
            token: authContext.token,
            roomId: roomId,
            customerName: userRef.current.value,
        })
    }

    let roomOptions
    var roomsFiltered
    if (rooms.isLoading){
        roomOptions = <CircularProgress size={"25px"} />
    }
    else if (rooms.isError){
        roomOptions = <span style={{color: 'red'}}>{rooms.error}</span>
    }
    else if (rooms.isSuccess){
        roomsFiltered = rooms.data.filter(r => {
            return r.status === 'Phòng trống'
        })
        roomOptions =  <OptionSelect message="Không còn phòng phù hợp yêu cầu" options={roomsFiltered} option={choosedRoom} setOption={setChoosedRoom}/>
    }

    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Đặt phòng</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.customerInfo}>
                        <span>Thông tin khách hàng</span>
                        <CustomerInfoRow required ref={userRef} icon={faUser} placeholder="Nguyễn Văn A" />
                        <CustomerInfoRow icon={faIdCard} placeholder="Nhập CCCD" />
                        <CustomerInfoRow icon={faPhone} placeholder="Nhập SĐT" type={"number"} />
                        <CustomerInfoRow icon={faAddressBook} placeholder="Nhập địa chỉ" />
                        <CustomerInfoRow icon={faEarth} placeholder="Nhập quốc tịch" />
                    </div>
                    <div className={classes.roomInfo}>
                        <span>Phòng yêu cầu</span>
                        <CustomerInfoRow icon={faCalendar} placeholder="Ngày ở" type={"date"} />
                        <CustomerInfoRow icon={faClock} placeholder="Số ngày ở" type={"number"} />
                        <CustomerInfoRow icon={faSortNumericDesc} placeholder="Số người" type={"number"}/>
                        <div className={classes.rooms}>
                            <span>Phòng phù hợp</span>
                            {roomOptions}
                        </div>
                    </div>
                </div>
                <div className={classes.btnGroup}>
                    <Button disabled={rooms.isLoading || bookRoomMutate.isLoading || choosedRoom === -1} variant="contained" color="success" type="submit">{bookRoomMutate.isLoading ? <CircularProgress size={'25px'}/> :'Đặt phòng'}</Button>
                    <Button disabled={rooms.isLoading || bookRoomMutate.isLoading} variant="contained" style={{backgroundColor:"#888", marginLeft:"5px"}} onClick={props.onBackdropClick}>Hủy</Button>
                </div>
            </form>
        </div>
    </Modal>
}

export default BookroomModal
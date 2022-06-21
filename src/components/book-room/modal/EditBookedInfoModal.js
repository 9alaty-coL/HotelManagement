import classes from "./EditBookedInfoModal.module.scss"
import Modal from "../../UI/Modal"
import CustomerInfoRow from "./CustomerInfoRow"
import { faSortNumericDesc, faCalendar, faClock,} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useContext, useEffect } from "react"
import OptionSelect from "../../UI/OptionSelect"
import { Button, CircularProgress } from "@mui/material"
import { useMutation, useQuery } from "react-query"
import {changeBookedRoom}  from "../../../api-calls/book-room/changeBookedRoom"
import {getAllRoom} from "../../../api-calls/book-room/get-all-room"
import AuthContext from "../../../context/AuthContext"

const EditBookedRoomModal = props => {
    const authContext = useContext(AuthContext)
    const [choosedRoom, setChoosedRoom] = useState(-1)
    const timeRef = useRef()
    const changeBookedRoomMutate = useMutation(changeBookedRoom)
    const rooms = useQuery('getRooms',getAllRoom.bind(null, authContext.token))
    let roomsFiltered;

    useEffect(()=>{
        if (changeBookedRoomMutate.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    }, [changeBookedRoomMutate.isSuccess])

    const submitHandler = e => {
        e.preventDefault()

        const roomName = roomsFiltered[choosedRoom].name
        changeBookedRoomMutate.mutate({
            token: authContext.token,
            name: roomName,
            oldName: props.roomName,
            time: timeRef.current.value,
            customer: props.customerName
        })
    }

    let roomOptions
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
        roomOptions =  <OptionSelect options={roomsFiltered} option={choosedRoom} setOption={setChoosedRoom}/>
    }

    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Chỉnh sửa đặt phòng</div>
            <form className={classes.body} onSubmit={submitHandler}>
                <div className={classes.info}>
                    <div className={classes.roomInfo}>
                        <span>Phòng {props.roomName}</span>
                        <span>{props.customerName}</span>
                        <CustomerInfoRow ref={timeRef} icon={faCalendar} placeholder="Ngày ở" type={"date"} value={props.bookDay}/>
                        <CustomerInfoRow icon={faClock} placeholder="Số ngày ở" type={"number"} min="1"/>
                        <CustomerInfoRow icon={faSortNumericDesc} placeholder="Số người" type={"number"} min="1" max="5"/>
                        <div className={classes.rooms}>
                            <span>Phòng phù hợp</span>
                            {roomOptions}
                        </div>
                    </div>
                </div>
                <div className={classes.btnGroup}>
                    <Button className={classes.btnSingle} disabled={rooms.isLoading || changeBookedRoomMutate.isLoading || choosedRoom === -1} variant="contained" color="success" type="submit" onClick={props.onSubmitChange}>{changeBookedRoomMutate.isLoading ? <CircularProgress size={'25px'}/> :'Cập nhật'}</Button>
                    <Button className={classes.btnSingle} disabled={rooms.isLoading || changeBookedRoomMutate.isLoading} variant="contained" style={{backgroundColor:"#888", marginLeft:"5px"}} onClick={props.onBackdropClick}>Hủy</Button>
                </div>
            </form>
        </div>
    </Modal>
}

export default EditBookedRoomModal
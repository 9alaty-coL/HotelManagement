import classes from "./RoomBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Row, Col } from 'reactstrap';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import RoomModal from './modal/RoomModal'
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext"
import { useQuery } from "react-query";
import { getSelectedRooms } from "../../api-calls/room/getSelectedRoom";
import { CircularProgress } from "@mui/material";


const types = [
    {
       id: 1, 
       data: "Phòng đơn"
    },
    {
       id: 2, 
       data: "Phòng đôi"
    },
    {
       id: 3, 
       data: "Villa"
    }
]

const RoomBox = props => {
    const authContext = useContext(AuthContext)
    const [reFetchRoom, setReFetchRoom] = useState(false)
    const roomsData = useQuery(['getSelectedRooms', reFetchRoom], 
        getSelectedRooms.bind(null, { token: authContext.token, status: props.statusSelected, type: props.typeSelected, state: props.stateSelected}))
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        roomsData.refetch()
    }, [props.statusSelected, props.typeSelected, props.stateSelected])

    let rooms
    if (roomsData.isLoading){
        rooms = <CircularProgress size={'25px'} />
    }
    else if (roomsData.isError){
        rooms = <span style={{color: 'red'}}>{roomsData.error}</span>
    }
    else if (roomsData.isSuccess){
        rooms = types.map((type) =>{
            const roomsOfType = roomsData.data.filter((room) => {
                return room.type === type.data;
            });
            return (
                <div key={type.id}>
                    <h4>{type.data}</h4>
                    <Row className={classes.Box}>
                        {roomsOfType.map((room) => {
                            let Top, Middle, Content, State;
                            if (room.status === "Phòng trống") {
                                Top = `${classes.Top} `;
                                Middle = `${classes.Middle} `;
                                Content = (<span><FontAwesomeIcon icon={Icons.faCheckCircle}/></span>);
                            }
                            else if (room.status === "Phòng đã đặt") {
                                Top = `${classes.Top} ${classes.Booked}`;
                                Middle = `${classes.Middle} ${classes.Booked}`;
                                Content = room.customer;
                            }
                            else if (room.status === "Phòng sửa chữa") {
                                Top = `${classes.Top} ${classes.Damaged}`;
                                Middle = `${classes.Middle} ${classes.Damaged}`;
                                Content = (<span><FontAwesomeIcon icon={Icons.faScrewdriverWrench}/></span>);
                            }
                            else if (room.status === "Phòng đã nhận") {
                                Top = `${classes.Top} ${classes.checkedIn}`;
                                Middle = `${classes.Middle} ${classes.checkedIn}`;
                                Content = room.customer;
                            }
    
                            if (room.actualState === "Đã dọn dẹp") {
                                State = (<span><FontAwesomeIcon icon={Icons.faCheck} />  Đã dọn dẹp</span>)
                            } 
                            else {
                                State = (<span><FontAwesomeIcon icon={Icons.faX} />  Chưa dọn dẹp</span>)
                            }
    
                            return (
                                <Col className={classes.BoxElement} xs={3} onClick={()=>setShowModal(room._id)} key={room._id}>
                                    <div className={Top}>
                                        <div className={classes.leftElement}>
                                            {room.name}
                                        </div>
                                        <div className={classes.rightElement}>
                                            {room.status}
                                        </div>
                                    </div>
                                    <div className={Middle} >
                                        <div className={classes.middleElement}>
                                            {Content}
                                        </div>
                                    
                                    </div>
                                    <div className={classes.Bottom}>
                                        <div className={classes.leftElement}>
                                            {room.price}
                                        </div>
                                        <div className={classes.rightElement}>
                                            {State}
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            )
        })
    }

    return <div className={classes.main}>
        {showModal && <RoomModal id={showModal} setReFetchRoom={setReFetchRoom} onBackdropClick={()=>setShowModal('')}/>}
        {rooms}
    </div>
}

export default RoomBox
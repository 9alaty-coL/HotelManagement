import classes from "./RoomBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Row, Col } from 'reactstrap';
import * as Icons from "@fortawesome/free-solid-svg-icons";

const rooms = [
    {
        id: 101,
        type: "Phòng đơn",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 102,
        type: "Phòng đơn",
        status: "Phòng trống", 
        actualState: "Chưa dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 103,
        type: "Phòng đơn",
        status: "Phòng đã đặt", 
        customer:"Nguyễn Hoàng Nam",
        actualState: "Đã dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 104,
        type: "Phòng đơn",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 105,
        type: "Phòng đơn",
        status: "Đã nhận phòng", 
        customer:"Nguyễn Hoàng Nam",
        actualState: "Chưa dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 201,
        type: "Phòng đôi",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 600 000đ"
    }, 
    {
        id: 202,
        type: "Phòng đôi",
        status: "Phòng đã đặt", 
        customer:"Nguyễn Hoàng Nam",
        actualState: "Đã dọn dẹp",
        price: "1 600 000đ"
    }, 
    {
        id: 203,
        type: "Phòng đôi",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 204,
        type: "Phòng đôi",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 800 000đ"
    }, 
    {
        id: 205,
        type: "Phòng đôi",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 800 000đ"
    },
    {
        id: 301,
        type: "Villa",
        status: "Đang sửa chữa", 
        actualState: "Chưa dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 302,
        type: "Villa",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 303,
        type: "Villa",
        status: "Phòng đã đặt", 
        customer:"Nguyễn Hoàng Nam",
        actualState: "Chưa dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 304,
        type: "Villa",
        status: "Phòng đã đặt", 
        customer:"Trần Tấn Lộc",
        actualState: "Chưa dọn dẹp",
        price: "1 000 000đ"
    }, 
    {
        id: 304,
        type: "Villa",
        status: "Phòng trống", 
        actualState: "Đã dọn dẹp",
        price: "1 000 000đ"
    }
]

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



const RoomBox = () => {
    return <div className={classes.main}>
        {types.map((type) =>{
            const roomsOfType = rooms.filter((room) => {
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
                            else if (room.status === "Đang sửa chữa") {
                                Top = `${classes.Top} ${classes.Damaged}`;
                                Middle = `${classes.Middle} ${classes.Damaged}`;
                                Content = (<span><FontAwesomeIcon icon={Icons.faScrewdriverWrench}/></span>);
                            }
                            else if (room.status === "Đã nhận phòng") {
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
                                <Col className={classes.BoxElement} xs={3} >
                                    <div className={Top}>
                                        <div className={classes.leftElement}>
                                            {room.id}
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
        })}

        </div>


            
}

export default RoomBox
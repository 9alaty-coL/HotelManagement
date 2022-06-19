import classes from "./Navbar.module.scss";
import BookroomModal from "./modal/BookroomModal"
import { useState } from "react";

const Navbar = props => {
    const [bookRoom, setBookRoom] = useState(false)
    return (
        <div className={classes.main}>
            <input type="text" placeholder="🔍Tìm kiếm theo tên khách hàng . . ."></input>
            <button onClick={()=>setBookRoom(true)}>Đặt phòng</button>
            {bookRoom && <BookroomModal onBackdropClick={()=>setBookRoom(prev=>!prev)} refetch={props.refetch}/>}
        </div>
    );
};

export default Navbar;
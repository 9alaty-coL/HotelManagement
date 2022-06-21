import classes from "./Navbar.module.scss";
import BookroomModal from "./modal/BookroomModal"
import { useState } from "react";

const Navbar = (props) => {
    const [bookRoom, setBookRoom] = useState(false)
    return (
        <div className={classes.main}>
            <button onClick={()=>setBookRoom(true)}>Thêm dịch vụ</button>
            {bookRoom && <BookroomModal onBackdropClick={()=>setBookRoom(prev=>!prev)} refetch={props.refetch}/>}
        </div>
    );
};

export default Navbar;
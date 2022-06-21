import classes from "./Navbar.module.scss";
import BookroomModal from "./modal/BookroomModal"
import SearchInput from "./NavbarSearchInput"
import { useState } from "react";

const Navbar = props => {
    const [bookRoom, setBookRoom] = useState(false)

    return (
        <div className={classes.main}>
            <SearchInput value={props.searchInput} setSearchInput={props.setSearchInput}/>
            <button onClick={()=>setBookRoom(true)}>Đặt phòng</button>
            {bookRoom && <BookroomModal onBackdropClick={()=>setBookRoom(prev=>!prev)} refetch={props.refetch}/>}
        </div>
    );
};

export default Navbar;
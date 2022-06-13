import classes from "./BookRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";

import EditBookedInfoModal from "./modal/EditBookedInfoModal"
import { useState } from "react"

const BookRow = (props) => {
    const [editRow, setEditRow] = useState(false)
    const [deleteRow, setDeleteRow] = useState(false)
    return (
        <div className={classes.main}>
            <div>{props.number}</div>
            <div>{props.customerName}</div>
            <div>{props.bookDay}</div>
            <div>{props.roomName}</div>
            <button onClick={() => setEditRow(true)}><FontAwesomeIcon icon={Icons.faPenToSquare} /></button>
            {editRow && <EditBookedInfoModal 
                onBackdropClick={()=>setEditRow(prev=>!prev)}
                roomName = {props.roomName}
                bookDay = {props.bookDay}
                customerName = {props.customerName}
                />}
            <button><FontAwesomeIcon icon={Icons.faDeleteLeft} /></button>
            {deleteRow && <EditBookedInfoModal onBackdropClick={()=>setDeleteRow(prev=>!prev)}/>}
        </div>
    );
};

export default BookRow;

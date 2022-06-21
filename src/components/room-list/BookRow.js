import classes from "./BookRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";
import EditBookedRoomModal from "./modal/EditBookedInfoModal"
import DeleteBookedRoomModal from "./modal/DeleteBookedInfoModal"
import { useState } from "react"

const BookRow = (props) => {
    const [editRow, setEditRow] = useState(false)
    const [deleteRow, setDeleteRow] = useState(false)

    return (
        <div className={classes.main}>
            <div>{props.number}</div>
            <div>{props.type}</div>
            <button onClick={() => setEditRow(true)}><FontAwesomeIcon icon={Icons.faPenToSquare} /></button>
            {editRow && <EditBookedRoomModal 
                onBackdropClick={()=>setEditRow(prev=>!prev)}
                type = {props.type}
                refetch = {props.refetch}
                />}
            <button onClick={() => setDeleteRow(true)}><FontAwesomeIcon icon={Icons.faDeleteLeft} /></button>
            {deleteRow && <DeleteBookedRoomModal 
                onBackdropClick={()=>setDeleteRow(prev=>!prev)}
                type = {props.type}
                refetch = {props.refetch}
                />}
        </div>
    );
};

export default BookRow;

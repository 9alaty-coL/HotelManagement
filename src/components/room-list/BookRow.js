import classes from "./BookRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";

const BookRow = (props) => {
    return (
        <div className={classes.main}>
            <div>{props.number}</div>
            <div>{props.roomType}</div>
            <div>{props.createdAt}</div>
            <button id={props.bookID}><FontAwesomeIcon icon={Icons.faPenToSquare} /></button>
            <button ><FontAwesomeIcon icon={Icons.faDeleteLeft} /></button>
        </div>
    );
};

export default BookRow;

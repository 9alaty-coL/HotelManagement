import classes from "./BookRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";

const BookRow = (props) => {
    return (
        <div className={classes.main}>
            <div>{props.number}</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <button id={props.serviceID}><FontAwesomeIcon icon={Icons.faPenToSquare} /></button>
            <button ><FontAwesomeIcon icon={Icons.faDeleteLeft} /></button>
        </div>
    );
};

export default BookRow;

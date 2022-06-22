import classes from "./BillRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";

const BookRow = (props) => {
    return (
        <div className={classes.main}>
            <div>{props.number}</div>
            <div>{props.billId}</div>
            <div>{props.customerName}</div>
            <div>{(new Date(props.date)).toLocaleString()}</div>
            <button onClick={()=>props.setModal(props.billId)}><FontAwesomeIcon icon={Icons.faEye} /></button>
        </div>
    );
};

export default BookRow;

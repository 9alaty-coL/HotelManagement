import classes from "./Pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
    return (
        <div className={classes.main}>
            {props.pageNumber > 1 && <button onClick={() => props.setPage(props.pageNumber - 1)}><FontAwesomeIcon icon={Icons.faArrowLeft} /></button>}
            <button>{props.pageNumber}</button>
            {props.pageNumber < props.pageMax && <button onClick={() => props.setPage(props.pageNumber + 1)}><FontAwesomeIcon icon={Icons.faArrowRight} /></button>}
        </div>
    );
};

export default Pagination
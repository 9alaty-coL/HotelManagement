import classes from "./CustomerRow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CustomerRow = props => {
    return <div className={classes.main}>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.content}</span>
    </div>
}

export default CustomerRow
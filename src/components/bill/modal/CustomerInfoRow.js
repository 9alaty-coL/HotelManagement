import classes from "./CustomerInfoRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerInfoRow = (props) => {
  return (
    <div className={classes.main}>
      <FontAwesomeIcon className={classes.icon} icon={props.icon} />
      <input
        className={classes.input}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default CustomerInfoRow;

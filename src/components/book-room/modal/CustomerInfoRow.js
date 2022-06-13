import classes from "./CustomerInfoRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const CustomerInfoRow = forwardRef((props, ref) => {
  return (
    <div className={classes.main}>
      <FontAwesomeIcon className={classes.icon} icon={props.icon} />
      <input
        ref={ref}
        className={classes.input}
        placeholder={props.placeholder}
        type={props.type}
        max={props.max}
        min={props.min}
        defaultValue={props.value}
      />
    </div>
  );
})

export default CustomerInfoRow;

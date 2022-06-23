import classes from "./DescriptionRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const DescriptionRow = forwardRef((props, ref) => {
  return (
    <div className={classes.main}>
      <FontAwesomeIcon className={classes.icon} icon={props.icon} />
      <textarea
        ref={ref}
        className={classes.textarea}
        placeholder={props.placeholder}
        required = {props.required}
        max={props.max}
        min={props.min}
        defaultValue={props.value}
        rows= "3" cols= "30"
      />
    </div>
  );
})

export default DescriptionRow;

import classes from "./RoomTypeInfoRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const RoomTypeInfoRow = forwardRef((props, ref) => {
  return (
    <div className={classes.main}>
      <FontAwesomeIcon className={classes.icon} icon={props.icon} />
      <input
        ref={ref}
        className={classes.input}
        placeholder={props.placeholder}
        type={props.type}
        required = {props.required}
        max={props.max}
        min={props.min}
        defaultValue={props.value}
        disabled={props.disabled}
      />
    </div>
  );
})

export default RoomTypeInfoRow;

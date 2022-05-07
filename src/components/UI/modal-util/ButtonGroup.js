import classes from "./ButtonGroup.module.scss";

const ButtonGroup = (props) => {
  return (
    <div className={classes.btnGroup}>
      <button>{props.ok}</button>
      <button>Hủy</button>
    </div>
  );
};

export default ButtonGroup;

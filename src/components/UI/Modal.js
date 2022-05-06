import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.close1} onClick={props.onCloseClick} />
      <div className={classes.close2} onClick={props.onCloseClick} />
      {props.children}
    </div>
  );
};

const portal = document.getElementById("root-portal");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onBackdropClick} />,
        portal
      )}
      {ReactDOM.createPortal(<Overlay onCloseClick={props.onCloseClick}>{props.children}</Overlay>, portal)}
    </>
  );
};

export default Modal;

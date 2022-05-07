import classes from "./BookroomModal.module.scss"
import Modal from "../../UI/Modal"
import CustomerInfo from "./CustomerInfo"
import RoomInfo from "./RoomInfo"
import ButtonGroup from "../../UI/modal-util/ButtonGroup"

const BookroomModal = props => {
    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        <div className={classes.main}>
            <div className={classes.header}>Đặt phòng</div>
            <div className={classes.body}>
                <CustomerInfo />
                <RoomInfo />
            </div>
            <ButtonGroup ok={"Đặt phòng"}/>
        </div>
    </Modal>
}

export default BookroomModal
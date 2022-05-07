import classes from "./RoomModal.module.scss";
import CustomerRow from "./CustomerRow";
import { faUser, faClock, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import OptionSelect from "../../UI/OptionSelect";
import { useState } from "react";
import Modal from "../../UI/Modal";
import ButtonGroup from "../../UI/modal-util/ButtonGroup";

const STATE_OPTIONS = [
  {
    name: "Trống",
  },
  {
    name: "Đã đặt",
  },
  {
    name: "Đang sử dụng",
  },
];

const CLEAN_OPTIONS = [
    {
        name: "Đã dọn",
    },
    {
        name: "Đang dọn",
    },
    {
        name: "Chưa dọn",
    },
]

const RoomModal = (props) => {
  const [roomState, setRoomState] = useState(0);
  const [cleanState, setCleanState] = useState(0);

  return (
    <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
      <div className={classes.main}>
        <div className={classes.header}>P01</div>
        <div className={classes.body}>
          <div className={classes.customer}>
            <CustomerRow icon={faUser} content={"TranTanLoc"} />
            <CustomerRow icon={faCalendar} content={"12/04/2022"} />
            <CustomerRow icon={faClock} content={"3 ngày"} />
            <CustomerRow icon={faUsers} content={"2 người"} />
          </div>
          <div className={classes.room_state}>
            <span>ĐÃ ĐẶT</span>
          </div>
        </div>
        <div className={classes.config}>
          <div className={classes.state}>
          <h4>Tình trạng</h4>
            <OptionSelect
              options={STATE_OPTIONS}
              option={roomState}
              setOption={setRoomState}
            />
          </div>
          <div className={classes.clean}>
          <h4>Dọn dẹp</h4>
            <OptionSelect
              options={CLEAN_OPTIONS}
              option={cleanState}
              setOption={setCleanState}
            />
          </div>
        </div>
        <ButtonGroup ok="Cập nhật" />
      </div>
    </Modal>
  );
};

export default RoomModal;

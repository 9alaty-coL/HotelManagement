import classes from "./RoomInfo.module.scss";
import CustomerInfoRow from "./CustomerInfoRow";
import {
  faSortNumericDesc,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import OptionSelect from "../../UI/OptionSelect"
import { useState } from "react";

const DUMMY_ROOMS = [
  {
    name: "P01",
  },
  {
    name: "P13",
  },
  {
    name: "P55",
  },
]

const RoomInfo = () => {
  const [choosedRoom, setChoosedRoom] = useState(0)
  return (
    <div className={classes.main}>
      <span>Phòng yêu cầu</span>
      <CustomerInfoRow icon={faCalendar} placeholder="Ngày ở" type={"date"} />
      <CustomerInfoRow icon={faClock} placeholder="Số ngày ở" type={"number"} />
      <CustomerInfoRow icon={faSortNumericDesc} placeholder="Số người" />
      <div className={classes.rooms}>
        <span>Phòng phù hợp</span>
        <OptionSelect options={DUMMY_ROOMS} option={choosedRoom} setOption={setChoosedRoom}/>
      </div>
    </div>
  );
};

export default RoomInfo;

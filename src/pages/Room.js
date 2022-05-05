import classes from "./css/Room.module.css"
import NavBar from "../components/navbar/NavBar";
import RoomPage from "../components/room/RoomPage";

const Room = () => {
  return (
    <div className={classes.main}>
      <NavBar />
      <div className={classes.page}>
        <RoomPage />
      </div>
    </div>
  );
};

export default Room;

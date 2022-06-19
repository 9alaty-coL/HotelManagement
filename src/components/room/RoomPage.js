import classes from "./RoomPage.module.scss";
import RoomPageNavbar from "./RoomPageNavbar";
import RoomType from "./RoomType";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomBox from "./RoomBox";

const RoomPage = () => {
    return <div className={classes.main}>
        {/* <RoomPageNavbar /> */}
        <RoomType />
        <RoomBox />
    </div>
}

export default RoomPage
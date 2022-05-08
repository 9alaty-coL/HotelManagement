import classes from "./css/RoomList.module.scss"
import RoomListPage from "../components/room-list/RoomListPage";
import NavBar from "../components/navbar/NavBar";

const RoomList = () => {
    return <>
        <NavBar />
        <RoomListPage />
    </>
}

export default RoomList
import classes from "./HomePage.module.scss"
import Slider from "./Slider"
import RoomModal from "../room/modal/RoomModal"
import BookroomModal from "../book-room/modal/BookroomModal"

const HomePage = () => {
    return <div className={classes.main}>
        <Slider />
    </div>
}

export default HomePage
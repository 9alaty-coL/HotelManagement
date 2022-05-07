import classes from "./HomePage.module.scss"
import Slider from "./Slider"
import { useState} from "react"
import RoomModal from "../room/modal/RoomModal"
import BookroomModal from "../book-room/modal/BookroomModal"

const HomePage = () => {
    const [modal, setModal] = useState(false)
    return <div className={classes.main}>
        <Slider />

        <div className={classes.info}>
            <h1 onClick={()=>setModal(prev=>!prev)}>show modal</h1>
            {modal && <BookroomModal onBackdropClick={()=>setModal(prev=>!prev)} />}
        </div>
    </div>
}

export default HomePage
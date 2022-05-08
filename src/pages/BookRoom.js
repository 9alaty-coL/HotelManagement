import classes from "./css/BookRoom.module.scss"
import NavBar from "../components/navbar/NavBar"
import BookroomPage from "../components/book-room/BookroomPage"

const BookRoom = () => {
    return <div className={classes.main}>
    <NavBar />
    <div className={classes.page}>
      <BookroomPage />
    </div>
  </div>
}

export default BookRoom
import classes from "./BookroomPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

const datas = [
    {number: 1, customerName: "Nguyễn Văn A", bookDay: "01/05/2022", roomName: "303", roomID: "303"},
    {number: 2, customerName: "Nguyễn Văn B", bookDay: "02/05/2022", roomName: "1012", roomID: "1012"},
    {number: 3, customerName: "Nguyễn Văn C", bookDay: "03/05/2022", roomName: "101", roomID: "101"},
    {number: 4, customerName: "Nguyễn Văn D", bookDay: "04/05/2022", roomName: "310", roomID: "310"},
    {number: 5, customerName: "Nguyễn Văn E", bookDay: "05/05/2022", roomName: "411", roomID: "411"},
    {number: 6, customerName: "Nguyễn Văn F", bookDay: "06/05/2022", roomName: "603", roomID: "603"},
    {number: 7, customerName: "Nguyễn Văn G", bookDay: "07/05/2022", roomName: "705", roomID: "705"},
    {number: 8, customerName: "Nguyễn Văn H", bookDay: "08/05/2022", roomName: "507", roomID: "507"},
    {number: 9, customerName: "Nguyễn Văn I", bookDay: "09/05/2022", roomName: "908", roomID: "908"},
    {number: 10, customerName: "Nguyễn Văn J", bookDay: "10/05/2022", roomName: "903", roomID: "903"},
    {number: 11, customerName: "Nguyễn Văn K", bookDay: "11/05/2022", roomName: "1103", roomID: "1103"},
    {number: 12, customerName: "Nguyễn Văn L", bookDay: "12/05/2022", roomName: "202", roomID: "202"},
    {number: 13, customerName: "Nguyễn Văn M", bookDay: "13/05/2022", roomName: "404", roomID: "404"},
    {number: 14, customerName: "Nguyễn Văn N", bookDay: "14/05/2022", roomName: "606", roomID: "606"},
]
    

const BookroomPage = () =>{
    return ( 
        <div className={classes.main}>
            <Navbar/>
            <HeadRow/>
            {datas.map(data => (
                <BookRow 
                    key={data.roomID} 
                    number={data.number} 
                    customerName={data.customerName} 
                    bookDay={data.bookDay}
                    roomName={data.roomName} 
                    roomID={data.roomID}>
                </BookRow>))
            }
        </div>     
    ) 
}

export default BookroomPage
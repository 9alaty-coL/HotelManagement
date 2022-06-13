import classes from "./RoomListPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

const datas = [
    {_id: 123, index: 1, roomType: "Phòng đơn", createdAt: "01/05/2022"},
    {_id: 345, index: 2, roomType: "Phòng đôi", createdAt: "02/05/2022"},
    {_id: 678, index: 3, roomType: "Villa", createdAt: "03/05/2022"},

]
    
const RoomList = () =>{
    return ( 
        <div className={classes.main}>
            <Navbar/>
            <HeadRow/>
            {datas.map(data => (
                <BookRow 
                    key={data._id} 
                    number={data.index} 
                    roomType={data.roomType} 
                    createdAt={data.createdAt}
                    roomID={data._id}>
                </BookRow>))
            }
        </div>     
    ) 
}

export default RoomList
import classes from "./RoomType.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
const Status = [
   {
      id: 0, 
      data: "Tất cả"
   },
   {
      id: 1, 
      data: "Phòng trống"
   },
   {
      id: 2, 
      data: "Phòng đã đặt"
   },
   {
      id: 3, 
      data: "Đã nhận phòng"
   },
   {
      id: 4, 
      data: "Đang sửa chữa"
   }
]
const Types = [
   {
      id: 0, 
      data: "Tất cả"
   },
   {
      id: 1, 
      data: "Phòng đơn"
   },
   {
      id: 2, 
      data: "Phòng đôi"
   },
   {
      id: 3, 
      data: "Villa"
   }
]
const actualState = [
   {
      id: 0, 
      data: "Tất cả"
   },
   {
      id: 1, 
      data: "Chưa dọn dẹp"
   },
   {
      id: 2, 
      data: "Đã dọn dẹp"
   },
]

const RoomType = props => {  
   return (<div className={classes.main}>
         <div className={classes.RoomType_element}>
            <h5>Loại phòng</h5>
            {Types.map((type) => {
               return (<div key= {type.id}>
                        <input 
                           type="radio" 
                           checked={type.data === props.typeSelected}
                           onChange={() => props.setTypeSelected(type.data)}
                        />
                           {type.data}
                     </div>)
            })}
        </div>
        
        <div className={classes.RoomType_element}>
            <h5>Trạng thái</h5>
            {Status.map((status) => {
               return (<div key= {status.id}>
                        <input 
                           type="radio" 
                           checked={status.data === props.statusSelected}
                           onChange={() => props.setStatusSelected(status.data)}
                        />
                           {status.data}
                     </div>)
            })}
        </div>

        <div className={classes.RoomType_element}>
            <h5>Hiện trạng</h5>
            {actualState.map((state) => {
               return (<div key= {state.id}>
                        <input 
                           type="radio" 
                           checked={state.data === props.stateSelected}
                           onChange={() => props.setStateSelected(state.data)}
                        />
                           {state.data}
                     </div>)
            })}
        </div>
           
    </div>)
}

export default RoomType
import classes from "./RoomModal.module.scss";
import CustomerRow from "./CustomerRow";
import { faUser, faClock, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import Modal from "../../UI/Modal";
import {useQuery, useMutation} from "react-query"
import { getRoomById } from "../../../api-calls/room/getRoomById";
import { getAllService } from "../../../api-calls/room/getServices";
import {CircularProgress, Button, FormControl, Select, MenuItem, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import { updateRoom } from "../../../api-calls/room/updateRoom";
import { addBill } from "../../../api-calls/room/addBill";
import { Link } from "react-router-dom";

const RoomModal = (props) => {
  const authContext = useContext(AuthContext)
  const roomMutate = useMutation(updateRoom)
  const billMutate = useMutation(addBill)
  const roomDetail = useQuery(['getRoomById', props.id, roomMutate.isSuccess], getRoomById.bind(null, props.id, authContext.token), {refetchOnWindowFocus: false, refetchOnMount: true})
  const services = useQuery(['getServices', props.id], getAllService.bind(null, authContext.token))
  const [roomState, setRoomState] = useState('Đã dọn dẹp');
  const [serviceListData, setServiceListData] = useState([])

  useEffect(() => {
    if (roomDetail.isSuccess){
      setServiceListData(roomDetail.data?.serviceList ?? [])
    }
  }, [roomDetail.isSuccess, roomDetail.data]);

  useEffect(() => {
    if(roomDetail?.data?.actualState){
      setRoomState(roomDetail?.data?.actualState)
    }
  }, [roomDetail?.data?.actualState])

  let serviceList
  if (services.isLoading){
    serviceList = <CircularProgress size={'25px'} />
  }
  else if (services.isError){
    serviceList = <span style={{color: 'red'}}>{services.error}</span>
  }
  else if (services.isSuccess){
    serviceList = <FormGroup style={{minWidth: '200px'}}>
      {services.data.map(s => {
        return <FormControlLabel control={<Checkbox />} 
        key={s._id}
        label={s.name}
        checked={(serviceListData.indexOf(s._id) ?? -1) !== -1}
        onChange={e=>{if(e.target.checked){
          setServiceListData(prev => [...prev, s._id])
        }
        else{
          setServiceListData(prev => {
              var temp = [...prev]
              temp.splice(temp.indexOf(s._id), 1)
              return temp
          })
        }}}
        />
      })}
    </FormGroup>
  }

  useEffect(() => {
    if (roomMutate.isSuccess){
      props.setReFetchRoom(prev => !prev)
      props.onBackdropClick()
    }
  }, [roomMutate.isSuccess])

  const onClickHandler = () => {
    const newR = {
      services: serviceListData,
      id: props.id,
      actualState: roomState,
    }
    if (roomDetail.data.status==='Phòng đã đặt'){
      newR.status = 'Phòng đã nhận'
    }
    else if (roomDetail.data.status === 'Phòng đã nhận'){
      newR.status = 'Phòng trống' 
      const newBill = {
        customerName: roomDetail.data.customer,
        roomName: roomDetail.data.name,
        from: roomDetail.data.time,
        createdBy: authContext.name,
        to: (new Date()).toLocaleDateString(),
        total: roomDetail.data.price,
    }
      billMutate.mutate({
        token: authContext.token,
        newBill: newBill,
      })
    }
    roomMutate.mutate({
      token: authContext.token,
      newRoom:newR,
    })
  }

  const handleChange = e => {
    setRoomState(e.target.value)
  }
  
  let room
  if (roomDetail.isLoading){
    room = <CircularProgress size={'25px'} />
  }
  else if (roomDetail.isError){
    room = <span style={{color: 'red'}}>{roomDetail.error}</span>
  }
  else if (roomDetail.isSuccess){
    room = <div className={classes.main}>
    <div className={classes.header}>{roomDetail.data.name}</div>
    <div className={classes.body}>
      <div className={classes.customer}>
        <CustomerRow icon={faUser} content={roomDetail.data.customer} />
        <CustomerRow icon={faCalendar} content={(new Date(roomDetail.data.time)).toLocaleDateString()} />
        <CustomerRow icon={faClock} content={roomDetail.data.day ?? "____"} />
        <CustomerRow icon={faUsers} content={roomDetail.data.people ?? "____"} />
      </div>
      <div className={classes.room_state}>
        <span>{roomDetail.data.status.substring(6).toUpperCase()}</span>
      </div>
    </div>
    <div className={classes.config}>
      <div className={classes.state}>
      <h4>Dịch vụ</h4>
      {serviceList}
      </div>
      <div className={classes.clean}>
      <h4>Dọn dẹp</h4>
        <FormControl sx={{ m: 1, minWidth: 200 }} style={{marginTop: '20px'}}>
          <Select
            value={roomState}
            onChange={handleChange}
            // displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={'Đã dọn dẹp'}>Đã dọn dẹp</MenuItem>
            <MenuItem value={'Chưa dọn dẹp'}>Chưa dọn dẹp</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
    <div className={classes.btnGroup}>
      <Button disabled={roomMutate.isLoading} variant="contained" color="success" onClick={onClickHandler}>{roomDetail.data.status==='Phòng đã đặt' ? 'Nhận phòng' : (roomDetail.data.status === 'Phòng đã nhận' ? 'Thanh toán' :<Link style={{color:'white', textDecoration:'none'}} to={'/book-room'}>Đặt phòng</Link>)}</Button>
      <Button disabled={roomMutate.isLoading} variant="contained" onClick={props.onBackdropClick} style={{backgroundColor: "#888", marginLeft: "20px"}}>Hủy</Button>
    </div>
  </div>
  }

  return (
    <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
      {room}
    </Modal>
  );
};

export default RoomModal;

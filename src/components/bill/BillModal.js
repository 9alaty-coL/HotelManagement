import classes from './BillModal.module.scss'
import Modal from "../UI/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";
import { getBillById } from "../../api-calls/book-room/bill";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const BillModal = props => {
    const authContext = useContext(AuthContext)
    const billDetail = useQuery('getBillById', getBillById.bind(null, authContext.token, props.id))

    let bill
    if (billDetail.isLoading){
        bill = <CircularProgress size={'25px'}/>
    }
    else if (billDetail.isError){
        bill = <span style={{color: 'red'}}>{billDetail.error}</span>
    }
    else if (billDetail.isSuccess){
        bill = <div className={classes.body}>
            <div className={classes.header}>
                Chi tiết hóa đơn
            </div>
            <div className={classes.detail}>
                <div className={classes.title}>
                    <span>Tên khách:</span>
                    <span>Phòng:</span>
                    <span>Đặt từ ngày:</span>
                    <span>Đến ngày:</span>
                    <span>Hóa đơn tạo bởi:</span>
                    <span>Tổng tiền:</span>
                </div>
                <div className={classes.info}>
                    <span>{billDetail.data[0].customerName}</span>
                    <span>{billDetail.data[0].roomName}</span>
                    <span>{(new Date(billDetail.data[0].from.toLocaleString())).toLocaleString()}</span>
                    <span>{(new Date(billDetail.data[0].to.toLocaleString())).toLocaleString()}</span>
                    <span>{billDetail.data[0].createdBy}</span>
                    <span>{billDetail.data[0].total}</span>
                </div>
            </div>
        </div>
    }
    return <Modal onBackdropClick={props.onBackdropClick} onCloseClick={props.onBackdropClick}>
        {bill}
    </Modal>
}

export default BillModal
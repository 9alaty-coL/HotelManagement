import classes from "./HeadRow.module.scss";

const HeadRow = () => {
    return (
        <div className={classes.main}>
            <div>STT</div>
            <div>Mã hóa đơn</div>
            <div>Tên khách hàng</div>
            <div>Ngày lập</div>
            <div>Xem</div>
        </div>
    );
};

export default HeadRow;
import classes from "./HeadRow.module.scss";

const HeadRow = () => {
    return (
        <div className={classes.main}>
            <div>STT</div>
            <div>Tên khách hàng</div>
            <div>Ngày đặt phòng</div>
            <div>Mã phòng</div>
            <div>Chỉnh sửa</div>
            <div>Xóa</div>
        </div>
    );
};

export default HeadRow;
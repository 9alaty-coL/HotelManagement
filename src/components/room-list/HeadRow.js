import classes from "./HeadRow.module.scss";

const HeadRow = () => {
    return (
        <div className={classes.main}>
            <div>STT</div>
            <div>Loại phòng</div>
            <div>Ngày thêm</div>
            <div>Chỉnh sửa</div>
            <div>Xóa</div>
        </div>
    );
};

export default HeadRow;
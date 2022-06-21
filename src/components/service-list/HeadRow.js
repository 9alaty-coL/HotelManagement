import classes from "./HeadRow.module.scss";

const HeadRow = () => {
    return (
        <div className={classes.main}>
            <div>STT</div>
            <div>Tên dịch vụ</div>
            <div>Mô tả</div>
            <div>Giá cả</div>
            <div>Chỉnh sửa</div>
            <div>Xóa</div>
        </div>
    );
};

export default HeadRow;
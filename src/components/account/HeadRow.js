import classes from "./HeadRow.module.scss";

const HeadRow = () => {
    return (
        <div className={classes.main}>
            <div>STT</div>
            <div>Tên tài khoản</div>
            <div>Mật Khẩu</div>
            <div>Họ và tên</div>
            <div>Quyền hạn</div>
            <div>Chỉnh sửa</div>
            <div>Xóa</div>
        </div>
    );
};

export default HeadRow;
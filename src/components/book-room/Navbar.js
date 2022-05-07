import classes from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={classes.main}>
            <input type="text" placeholder="🔍Tìm kiếm theo tên khách hàng . . ."></input>
            <button>Đặt phòng</button>
        </div>
    );
};

export default Navbar;
import classes from "./NavBar.module.scss";
import { useState } from "react";
import Option from "./Option";
import LogoutModal from "../home/LogoutModal";

const OPTION_LIST = [
  {
    name: "Trang Chủ",
    path: "/",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/2048px-Home_Icon.svg.png",
  },
  {
    name: "Phòng",
    path: "/room",
    link: "https://vi.seaicons.com/wp-content/uploads/2016/08/Household-Room-icon-1.png",
  },
  {
    name: "Thuê Phòng",
    path: "/book-room",
    link: "https://cdn.iconscout.com/icon/premium/png-256-thumb/rent-45-825606.png",
  },
  {
    name: "Hóa đơn",
    path: "/bills",
    link: "https://static.thenounproject.com/png/139414-200.png",
  },
  {
    name: "Danh mục phòng",
    path: "/room-list",
    link: "https://cdn-icons-png.flaticon.com/512/93/93998.png",
  },
  {
    name: "Danh mục dịch vụ",
    path: "/service-list",
    link: "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/008/561/original/service.png",
  },
  {
    name: "Nhắn tin",
    path: "/messenger",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Font_Awesome_5_brands_facebook-messenger.svg/1792px-Font_Awesome_5_brands_facebook-messenger.svg.png",
  },
  {
    name: "Đăng xuất",
    path: "/logout",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/240px-OOjs_UI_icon_logOut-ltr.svg.png",
  },
];

const NavBar = () => {
  const [showName, setShowName] = useState(false);
  const [isLogout, setIsLogout] = useState(false)
  const options = OPTION_LIST.map((value) => (
    <Option
      showName={showName}
      key={value.name}
      name={value.name}
      link={value.path}
      imgSrc={value.link}
      setIsLogout={setIsLogout}
    />
  ));
  return (
    <div className={`${classes.navbar} ${!showName && classes.hide}`}>
      <div
        className={classes.show}
        onClick={() => setShowName((prev) => !prev)}
      >
          <div className={classes.line} />
      </div>
      {options}
      {isLogout && <LogoutModal onBackdropClick={()=>setIsLogout(false)}/>}
    </div>
  );
};

export default NavBar;

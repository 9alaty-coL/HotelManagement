import classes from "./CustomerInfo.module.scss"
import CustomerInfoRow from "./CustomerInfoRow"
import { faUser, faIdCard, faPhone, faAddressBook, faEarth} from "@fortawesome/free-solid-svg-icons"

const CustomerInfo = props => {
    return <div className={classes.main}>
        <span>Thông tin khách hàng</span>
        <CustomerInfoRow icon={faUser} placeholder="Nguyễn Văn A" />
        <CustomerInfoRow icon={faIdCard} placeholder="Nhập CCCD" />
        <CustomerInfoRow icon={faPhone} placeholder="Nhập SĐT" />
        <CustomerInfoRow icon={faAddressBook} placeholder="Nhập địa chỉ" />
        <CustomerInfoRow icon={faEarth} placeholder="Nhập quốc tịch" />
    </div>
}

export default CustomerInfo
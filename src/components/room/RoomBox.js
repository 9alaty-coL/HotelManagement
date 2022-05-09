import classes from "./RoomBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons";


const RoomBox = () => {
    return <div className={classes.main}>
        <h4>Phòng đơn</h4>
        <div className={classes.Box}>
            <div className={classes.BoxElement}>
                <div className={classes.Top}>
                    <div className={classes.leftElement}>
                        P101
                    </div>
                    <div className={classes.rightElement}>
                        Phòng trống
                    </div>
                </div>
                <div className={classes.Middle}>
                    <div className={classes.middleElement}>
                        <span><FontAwesomeIcon icon={Icons.faCheckCircle} /></span> 
                        
                    </div>
                   
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.leftElement}>
                        1 000 000đ
                    </div>
                    <div className={classes.rightElement}>
                        <FontAwesomeIcon icon={Icons.faCheck} />  Đã dọn dẹp
                    </div>
                </div>
            </div>

            <div className={classes.BoxElement}>
                <div className={`${classes.Top} ${classes.Booked}`}>
                    <div className={classes.leftElement}>
                        P102
                    </div>
                    <div className={classes.rightElement}>
                        Phòng đã đặt
                    </div>
                </div>
                <div className={`${classes.Middle} ${classes.Booked}`}>
                    <div className={classes.middleElement}> 
                        Nguyễn Hoàng Nam
                    </div>
                   
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.leftElement}>
                        1 200 000đ
                    </div>
                    <div className={classes.rightElement}>
                        <FontAwesomeIcon icon={Icons.faX} />  Chưa dọn dẹp
                    </div>
                </div>
            </div>

            <div className={classes.BoxElement}>
                <div className={`${classes.Top} ${classes.Damaged}`}>
                    <div className={classes.leftElement}>
                        P103
                    </div>
                    <div className={classes.rightElement}>
                        Phòng trống
                    </div>
                </div>
                <div className={`${classes.Middle} ${classes.Damaged}`}>
                    <div className={classes.middleElement}> 
                        <span><FontAwesomeIcon icon={Icons.faScrewdriverWrench} /></span>
                    </div>
                   
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.leftElement}>
                        3 200 000đ
                    </div>
                    <div className={classes.rightElement}>
                        <FontAwesomeIcon icon={Icons.faScrewdriverWrench} />  Đang sửa chữa
                    </div>
                </div>
            </div>
        </div>
        </div>


            
}

export default RoomBox
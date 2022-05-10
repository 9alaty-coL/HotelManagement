import classes from "./RoomPageNavbar.module.scss";
import {Input, Button } 
    from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoomPageNavbar = () => {
    return <div className={classes.main}>
                <div className={classes.searchRoom}>
                    <Input
                        id="findRoom"
                        name="findRoom"
                        placeholder="Find room"
                        type="text"
                    />
                    <Button className={classes.searchBtn}  color="primary" outline >
                        Find
                    </Button>
                </div>
                <div style={{flex: 2}}></div>
                <div className={classes.datePicker}>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                </div>
        </div>
}

export default RoomPageNavbar
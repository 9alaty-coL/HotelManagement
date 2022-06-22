import classes from "./RoomPage.module.scss";
import RoomPageNavbar from "./RoomPageNavbar";
import RoomType from "./RoomType";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomBox from "./RoomBox";

import { useState } from "react";

const RoomPage = () => {
    const [statusSelected, setStatusSelected] = useState("Tất cả");
    const [typeSelected, setTypeSelected] = useState("Tất cả");
    const [stateSelected, setStateSelected] = useState("Tất cả");

    return <div className={classes.main}>
        {/* <RoomPageNavbar /> */}
        <RoomType statusSelected={statusSelected} typeSelected={typeSelected} stateSelected={stateSelected}
                    setStatusSelected={setStatusSelected} setTypeSelected={setTypeSelected} setStateSelected={setStateSelected}/>
        <RoomBox statusSelected={statusSelected} typeSelected={typeSelected} stateSelected={stateSelected}/>
    </div>
}

export default RoomPage
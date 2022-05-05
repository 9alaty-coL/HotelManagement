import classes from "./HomePage.module.scss"
import Slider from "./Slider"

const HomePage = () => {
    return <div className={classes.main}>
        <Slider />

        <div className={classes.info}>
            <h1>Hotel Management</h1>
        </div>
    </div>
}

export default HomePage
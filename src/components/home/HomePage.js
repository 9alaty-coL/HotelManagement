import classes from "./HomePage.module.scss"
import Slider from "./Slider"

const HomePage = () => {
    return <div className={classes.main}>
        <Slider />

        <div className={classes.info}>
        </div>
    </div>
}

export default HomePage
import classes from './css/Messenger.module.scss'
import NavBar from "../components/navbar/NavBar"

import CurrentChat from '../components/messenger/CurrentChat'
import People from '../components/messenger/People'

const Messenger = props => {
    return <div className={classes.main}>
        <NavBar />
        <div className={classes.page}>
            <CurrentChat />
            <People />
        </div>
    </div>
}

export default Messenger
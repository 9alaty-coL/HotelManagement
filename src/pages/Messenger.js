import classes from './css/Messenger.module.scss'
import NavBar from "../components/navbar/NavBar"

import Conversation from '../components/messenger/Conversation'
import People from '../components/messenger/People'

const Messenger = props => {
    return <div className={classes.main}>
        <NavBar />
        <div className={classes.page}>
            <Conversation />
            <People />
        </div>
    </div>
}

export default Messenger
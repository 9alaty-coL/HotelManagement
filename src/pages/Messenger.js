import classes from './css/Messenger.module.scss'
import NavBar from "../components/navbar/NavBar"
import { useState } from 'react'

import Conversation from '../components/messenger/Conversation'
import People from '../components/messenger/People'

const Messenger = props => {
    const [partnerId, setPartnerId] = useState(null)
    return <div className={classes.main}>
        <NavBar />
        <div className={classes.page}>
            {partnerId && <Conversation partnerId={partnerId}/>}
            <People setPartnerId={setPartnerId}/>
        </div>
    </div>
}

export default Messenger
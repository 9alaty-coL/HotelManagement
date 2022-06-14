import classes from './css/Messenger.module.scss'
import NavBar from "../components/navbar/NavBar"
import { useState, useEffect, useContext } from 'react'

import Conversation from '../components/messenger/Conversation'
import People from '../components/messenger/People'
import { useParams } from 'react-router-dom'


// import {io} from 'socket.io-client'

const Messenger = props => {

    const params = useParams()
    // const [partnerId, setPartnerId] = useState(null)
    const partnerId = params.recieverId
    return <div className={classes.main}>
        <NavBar />
        <div className={classes.page}>
            {partnerId && <Conversation partnerId={partnerId}/>}
            <People/>
        </div>
    </div>
}

export default Messenger
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from "@fortawesome/free-solid-svg-icons"
import classes from './Conversation.module.scss'

const DUMMY_MESSAGE = [
    {
        senderId: 'fasdfoi12n',
        recieverId: 'adsfavsd',
        message: 'Hello! My name is Loc',
    },
]

const reciever = {
    name: 'Tan Loc',
    isAdmin: false,
    avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
}

const Conversation = () => {
    return <div className={classes.main}>
        <div className={classes.friend}>
            <div className={classes.avatar}>
                <img src={reciever.avatar} />
            </div>
            <div className={classes.info}>
                <h4 className={classes.name}>{reciever.name}</h4>
                <span className={classes.role}>{reciever.role ? 'Admin' : 'Staff'}</span>
            </div>
            <div className={classes.feature}>
                <FontAwesomeIcon icon={faPhone} fontSize={40} />
            </div>
        </div>
        <div className={classes.messages}>

        </div>
        <div className={classes.send}>
            <textarea />
        </div>
    </div>
}

export default Conversation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowRight, faArrow} from "@fortawesome/free-solid-svg-icons"
import classes from './Conversation.module.scss'
import Message from './Message'
import {useRef, useEffect} from 'react'


const DUMMY_MESSAGE = [
    {
        senderId: 'me',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello! My name is Loc',
        createAt: '2021-04-25T14:20:28.262+00:00',
    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
    {
        senderId: 'guest',
        recieverId: 'other',
        message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        createAt: '2021-04-25T14:20:28.262+00:00',

    },
]

const reciever = {
    name: 'ABC',
    isAdmin: false,
    avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png',
}

const user = {
    _id: 'me',
    name: 'Tan Loc',
    isAdmin: false,
    avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png',
    
}



const Conversation = () => {
    const formRef = useRef()
    const textareaRef = useRef()
    const messagesRef = useRef()
    const messages = DUMMY_MESSAGE.map(value => {
        return <Message ref={messagesRef} message={value.message} send={value.senderId == user._id} createAt={value.createAt} />
    })
    useEffect(()=>{
        messagesRef.current.scrollIntoView({behavior: 'smooth'})
    }, [DUMMY_MESSAGE])
    const submitHandler = e => {
        e.preventDefault()
        textareaRef.current.value=''
    }
    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey == false){
            e.preventDefault()
            textareaRef.current.value=''
        }
    }
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
            {messages}
        </div>
        <form className={classes.send} onSubmit={submitHandler} ref={formRef}>
            <div className={classes.textBox}><textarea ref={textareaRef} onKeyDown={onEnterPress} rows={3} placeholder={'your message...'} /></div>
            <button className={classes.sendBtn} type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
    </div>
}

export default Conversation
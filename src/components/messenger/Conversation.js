import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowRight, faArrow} from "@fortawesome/free-solid-svg-icons"
import classes from './Conversation.module.scss'
import Message from './Message'
import {useRef, useEffect, useContext, useState, useCallback} from 'react'
import AuthContext from '../../context/AuthContext'
import getAllMessage from '../../api-calls/message/getAllMessage'
import { useQuery, useMutation, useIsFetching } from 'react-query'
import {sendMessage} from '../../api-calls/message/sendMessage'
import { autocompleteClasses, CircularProgress } from "@mui/material";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {io} from 'socket.io-client'

const getOneUser = async (token, userId)=>{
    let res
    try {
        res = await axios({
            method: 'get',
            url: 'http://localhost:8000/api/mess/user',
            params: {
                token: token, 
                userId: userId
            }
        })
        const data = await res.data
        return data
    } catch (err) {
        throw (new Error(err.data.response.message))
    }
}

const Conversation = props => {
    const params = useParams()
    const authContext = useContext(AuthContext)
    const formRef = useRef()
    const textareaRef = useRef()
    const messagesRef = useRef()
    const messageMutation = useMutation(sendMessage)
    const [dataMess, setDataMess] = useState([])
    const messagesData = useQuery(['getMessages', props.partnerId],getAllMessage.bind(null, authContext.token, props.partnerId),{
        refetchOnWindowFocus: false
    })
    const {data: reciever, isLoading} = useQuery(['getUser', props.partnerId], getOneUser.bind(null, authContext.token, props.partnerId))
    const recieverId = params.recieverId
    const [socket, setSocket] = useState(null)

    console.log(dataMess)

    useEffect(() => {
        setSocket(io('ws://localhost:8900'))
    }, [])

    useEffect(()=>{
        socket?.on("RecieveMessage", mess => {
            // console.log(dataMess)
            setDataMess(prev => [...prev, mess])
        })
        socket?.on("GetUsers", users => console.log(users))
        socket?.emit("AddUser", authContext._id)
    }, [socket])

    useEffect(() => {
        if (messagesData.data){
            setDataMess(messagesData.data)
        }
    }, [messagesData.data])

    let messages
    if (messagesData.isLoading){
        // messages = <CircularProgress color="primary" size="80px" style={{
        //     position: "absolute",
        //     left: "45%",
        //     top: "40%",
        // }} />
    }
    else if (messagesData.isError){
        messages = <span style={{color: "red"}}>Error: {messagesData.error}</span>
    }
    else if (messagesData.isSuccess && dataMess){
        messages = dataMess.map(value => {
            return <Message ref={messagesRef} key={value._id} message={value.message} send={value.senderId === authContext._id} createdAt={value.createdAt} />
        })
    }
    // const messages = DUMMY_MESSAGE.map(value => {
    //     return <Message ref={messagesRef} message={value.message} send={value.senderId == user._id} createAt={value.createAt} />
    // })
    useEffect(()=>{
        if (messagesRef){
            messagesRef?.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    const submitHandler = e => {
        e.preventDefault()
        if (textareaRef.current.value === ''){
            return
        }
        const newMess = {
            token: authContext.token,
            senderId: authContext._id,
            recieverId: recieverId,
            message: textareaRef.current.value,
            createdAt: new Date()
        }
        messageMutation.mutate({
            token: authContext.token,
            senderId: authContext._id,
            recieverId: recieverId,
            message: textareaRef.current.value,
        })
        setDataMess(prev => [...prev, newMess])
        socket?.emit("SendMessage", newMess)
        textareaRef.current.value=''
    }
    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false){
            e.preventDefault()
            if (textareaRef.current.value === ''){
                return
            }
            const newMess = {
                token: authContext.token,
                senderId: authContext._id,
                recieverId: recieverId,
                message: textareaRef.current.value,
                createdAt: new Date()
            }
            messageMutation.mutate({
                token: authContext.token,
                senderId: authContext._id,
                recieverId: recieverId,
                message: textareaRef.current.value,
            })
            setDataMess(prev => [...prev, newMess])
            socket?.emit("SendMessage", newMess)
            textareaRef.current.value=''
        }
    }
    return <div className={classes.main}>
        <div className={classes.friend}>
            <div className={classes.avatar}>
                <img src={!isLoading ? reciever?.avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'} />
            </div>
            <div className={classes.info}>
                <h4 className={classes.name}>{!isLoading && reciever?.name}</h4>
                <span className={classes.role}>{reciever !== undefined && (!isLoading && reciever?.role ? 'Admin' : 'Staff')}</span>
            </div>
            <div className={classes.feature}>
                <FontAwesomeIcon icon={faPhone} fontSize={40} />
            </div>
        </div>
        <div className={classes.messages}>
            {messages}
        </div>
        <form className={classes.send} onSubmit={submitHandler} ref={formRef}>
            <div className={classes.textBox}><textarea required ref={textareaRef} onKeyDown={onEnterPress} rows={3} placeholder={'your message...'} /></div>
            <button disabled={messageMutation.isLoading} className={classes.sendBtn} type="submit">{messageMutation.isLoading ? <CircularProgress size='25px' /> :<FontAwesomeIcon icon={faArrowRight} />}</button>
        </form>
    </div>
}

export default Conversation
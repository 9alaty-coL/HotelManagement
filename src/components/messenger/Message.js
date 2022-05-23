import classes from './Message.module.scss'
import ReactTimeAgo from 'react-time-ago'
import { forwardRef } from 'react'

const Message = forwardRef((props, ref) => (<div ref={ref}  className={`${classes.main} ${props.send ? classes.send : classes.recieve}`} >
        <span className={classes.message}>{props.message}</span>
        <span className={classes.timeAgo}><ReactTimeAgo date={new Date(props.createdAt)} locale="en-US"/></span>
    </div>))

export default Message
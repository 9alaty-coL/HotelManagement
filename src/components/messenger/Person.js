import classes from './Person.module.scss'
import { Link } from 'react-router-dom'

const Person = props => {
    return <Link to={`/messenger/${props._id}`} style={{
        textDecoration: "none",
        display: "block",
        width: "100%"
    }}>
        <div className={classes.main}>
            <div className={classes.avatar}>
            <img src={props.avatar} />
            </div>
            <div className={classes.main__info}>
                <span className={classes.name}>{props.name}</span>
                <span className={classes.role}>{props.role ? 'Admin' : 'staff'}</span>
            </div>
        </div>
    </Link>
}

export default Person
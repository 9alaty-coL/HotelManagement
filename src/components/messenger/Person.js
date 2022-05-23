import classes from './Person.module.scss'


const Person = props => {
    return <div className={classes.main} onClick={props.onClick}>
        <div className={classes.avatar}>
        <img src={props.avatar} />

        </div>
        <div className={classes.main__info}>
            <span className={classes.name}>{props.name}</span>
            <span className={classes.role}>{props.role ? 'Admin' : 'staff'}</span>
        </div>
    </div>
}

export default Person
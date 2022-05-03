import classes from "./Option.module.scss"
import { NavLink } from "react-router-dom"

const Option = props => {
    return <NavLink to={props.link} className={({isActive}) => classes.option + ' ' + (isActive?classes.active:'')} >
        <img src={props.imgSrc} />
        {props.showName && <span>{props.name}</span>}
    </NavLink>
}

export default Option
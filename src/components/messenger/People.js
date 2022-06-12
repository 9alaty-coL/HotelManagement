import classes from './People.module.scss'
import Person from './Person'
import { useQuery } from 'react-query'
import getAllPartners from '../../api-calls/message/getAllPartners'
import { CircularProgress } from "@mui/material";
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const People = props => {
    const authContext = useContext(AuthContext)
    const partners = useQuery('getAllPartners', getAllPartners.bind(null, authContext.token))
    let people
    if (partners.isLoading){
        people = <CircularProgress color="primary" size="80px" />
    }
    else if (partners.isError){
        people = <span style={{color: 'red'}}>Error: {partners.error.message}</span>
    }
    else{
        
        people = partners.data.map(value => {
           return <Person
                   key = {value._id}
                   _id = {value._id}
                   name = {value.name}
                   isAdmin = {value.isAdmin}
                   avatar = {value.avatar}
               />

       })
    }

    return <div className={classes.main}>
        <h2 className={classes.title}>
            Trò chuyện
        </h2>
        <div className={classes.people}>
        {people}
        </div>
    </div>
}

export default People
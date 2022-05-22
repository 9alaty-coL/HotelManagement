import classes from './People.module.scss'
import Person from './Person'

const DUMMY_PEOPLE = [
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
    {
        name: 'Tan Loc',
        isAdmin: false,
        avatar: 'https://shop.phuongdonghuyenbi.vn/wp-content/uploads/avatars/1510/default-avatar-bpthumb.png'
    },
]


const People = props => {
    const people = DUMMY_PEOPLE.map(value => {
        return <Person 
            name = {value.name}
            isAdmin = {value.isAdmin}
            avatar = {value.avatar}
        />
    })

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
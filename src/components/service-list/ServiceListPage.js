import classes from "./ServiceListPage.module.scss"
import BookRow from "./BookRow.js"
import HeadRow from "./HeadRow.js"
import Navbar from "./Navbar.js"

const datas = [
    {_id: 123, index: 1, name: "", description: "", price:"1 000 000đ"},
    {_id: 345, index: 2, name: "", description: "", price:"1 000 000đ"},
    {_id: 678, index: 3, name: "", description: "", price:"1 000 000đ"},

]
    
const ServiceListPage = () =>{
    return ( 
        <div className={classes.main}>
            <Navbar/>
            <HeadRow/>
            {datas.map(data => (
                <BookRow 
                    key={data._id} 
                    number={data.index} 
                    name={data.name} 
                    description={data.description}
                    price={data.price}
                    serviceID={data._id}>
                </BookRow>))
            }
        </div>     
    ) 
}


export default ServiceListPage
import classes from "./BillPage.module.scss"
import HeadRow from "./HeadRow"
import BillRow from "./BillRow"
import Navbar from "./Navbar"
import BillModal from "./BillModal"

import { useQuery } from "react-query"
import {getBills} from "../../api-calls/book-room/bill"
import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { CircularProgress } from "@mui/material"

const BillPage = () => {
    const [modal, setModal] = useState('')
    const authContext = useContext(AuthContext)
    const billsData = useQuery('getBills', getBills.bind(null, authContext.token))

    let bills
    if (billsData.isLoading){
        bills = <CircularProgress size={25} />
    }
    else if (billsData.isError){
        bills = <span style={{color: 'red'}}>{billsData.error}</span>
    }
    else if (billsData.isSuccess){
        bills = billsData.data.map((data, index) => (
            <BillRow 
                key={data._id} 
                number={index + 1}
                billId={data._id} 
                customerName={data.customerName} 
                setModal = {setModal}
                date={data.to}>
            </BillRow>))
    }

    return ( 
        <div className={classes.main}>
            <Navbar/>
            <HeadRow/>
            {bills}
            {modal && <BillModal id={modal} onBackdropClick={()=>setModal('')}/>}
        </div>
    ) 
}

export default BillPage
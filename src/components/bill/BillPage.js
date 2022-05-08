import classes from "./BillPage.module.scss"
import HeadRow from "./HeadRow"
import BillRow from "./BillRow"
import Navbar from "./Navbar"

const datas = [
    {number: 1, customerName: "Nguyễn Văn A", date: "01/05/2022", billId: "303"},
    {number: 2, customerName: "Nguyễn Văn B", date: "02/05/2022", billId: "1012"},
    {number: 3, customerName: "Nguyễn Văn C", date: "03/05/2022", billId: "101"},
    {number: 4, customerName: "Nguyễn Văn D", date: "04/05/2022", billId: "310"},
    {number: 5, customerName: "Nguyễn Văn E", date: "05/05/2022", billId: "411"},
    {number: 6, customerName: "Nguyễn Văn F", date: "06/05/2022", billId: "603"},
    {number: 7, customerName: "Nguyễn Văn G", date: "07/05/2022", billId: "705"},
    {number: 8, customerName: "Nguyễn Văn H", date: "08/05/2022", billId: "507"},
    {number: 9, customerName: "Nguyễn Văn I", date: "09/05/2022", billId: "908"},
    {number: 10, customerName: "Nguyễn Văn J", date: "10/05/2022", billId: "903"},
    {number: 11, customerName: "Nguyễn Văn K", date: "11/05/2022", billId: "1103"},
    {number: 12, customerName: "Nguyễn Văn L", date: "12/05/2022", billId: "202"},
    {number: 13, customerName: "Nguyễn Văn M", date: "13/05/2022", billId: "404"},
    {number: 14, customerName: "Nguyễn Văn N", date: "14/05/2022", billId: "606"},
]

const BillPage = () => {
    return ( 
        <div className={classes.main}>
            <Navbar/>
            <HeadRow/>
            {datas.map(data => (
                <BillRow 
                    key={data.billId} 
                    number={data.number}
                    billId={data.billId} 
                    customerName={data.customerName} 
                    date={data.date}>
                </BillRow>))
            }
        </div>     
    ) 
}

export default BillPage
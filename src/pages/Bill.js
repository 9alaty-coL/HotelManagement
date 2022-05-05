import classes from "./css/Bill.module.css";
import NavBar from "../components/navbar/NavBar";
import BillPage from "../components/bill/BillPage"

const Bill = () => {
  return (
    <div className={classes.main}>
      <NavBar />
      <div className={classes.page}>
        <BillPage />
      </div>
    </div>
  );
};

export default Bill;

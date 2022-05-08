import classes from "./css/Home.module.scss";
import NavBar from "../components/navbar/NavBar";
import HomePage from "../components/home/HomePage";

const Home = () => {
  return (
    <div className={classes.main}>
      <NavBar />
      <div className={classes.page}>
        <HomePage />
      </div>
    </div>
  );
};

export default Home;

import classes from "./css/Home.module.css";
import NavBar from "../components/navbar/NavBar";
import HomePage from "../components/home/HomePage";

const Home = () => {
  return (
    <div className={classes.main}>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Home;

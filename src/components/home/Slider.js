import classes from "./Slider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  // return <div className={classes.background}>
  //     <img  src="https://leverageedu.com/blog/wp-content/uploads/2020/05/Hotel-Management-Courses.jpg" />
  // </div>
  return (
    <div className={classes.background}>
      <Carousel
        width={"100%"}
        showThumbs={false}
        // showIndicators={false}
        // showStatus={false}
        // showArrows={false}
        autoPlay={true}
        interval={2500}
        infiniteLoop={true}
      >
        <div>
          <img src="https://www.dissertation-help.co.uk/wp-content/uploads/2020/02/hospitality-dissertation-topics.png" />
          <p className="legend">Manageable</p>
        </div>
        <div>
          <img src="https://ucarecdn.com/2ef7a477-ddf4-45e3-84e4-be4a99791614/6aba166a51ec41aabaf46ec87747097d.png" />
          <p className="legend">Flexible</p>
        </div>
        <div>
          <img src="https://skytouchtechnology.com/wp-content/uploads/2018/08/Part1-Feature.png" />
          <p className="legend">Solutions</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

import "./Works.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Works = () => {
  return (
    <div id='works' className="work">
      <div className="work-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="work-container">
        {mywork_data.map((work, index) => {
          return <img key={work + index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="work-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};
export default Works;

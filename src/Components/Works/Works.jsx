import mywork_data from "../../assets/mywork_data.js";
import "./Works.css";

const Works = () => {
  return (
    <div id="works" className="work">
      <div className="work-title">
        <h1>My Works</h1>
      </div>
      <div className="work-container">
        {mywork_data.map((work, index) => {
          return <img key={work + index} src={work.w_img} alt="" />;
        })}
      </div>
    </div>
  );
};
export default Works;

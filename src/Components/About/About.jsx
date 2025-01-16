import profile_img from "../../assets/test_about.png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I&apos;m a passionate Web Developer with 6 years of experience
              crafting intuitive and visually appealing user interfaces. I
              thrive on transforming complex ideas into seamless digital
              experiences, always keeping user satisfaction at the heart of my
              work.
            </p>
            <p>
              My Passion for frontend development is not only reflected in my
              experience but also in the enthusiasm and dedication with which I
              bring life to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML&CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Typescript</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* To-Do: Add if you have proper achievements */}
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;

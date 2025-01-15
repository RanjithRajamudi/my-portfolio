import { motion } from "motion/react";
import profile_img from "../../assets/test_about.png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About me
        </motion.h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.4 }}
            src={profile_img}
            alt=""
          />
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
              experience but also in the enthusiasm and dedication whith which I
              bring life to each project.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="about-skills"
          >
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
          </motion.div>
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

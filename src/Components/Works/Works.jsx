import { motion } from "motion/react";
import mywork_data from "../../assets/mywork_data.js";
import "./Works.css";

const Works = () => {
  return (
    <div id="works" className="work">
      <div className="work-title">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Latest work
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="work-container"
      >
        {mywork_data.map((work, index) => {
          return (
            <motion.img
              initial={{ rotateY: -70 }}
              whileInView={{ rotateY: 0 }}
              key={work + index}
              src={work.w_img}
              alt=""
            />
          );
        })}
      </motion.div>
    </div>
  );
};
export default Works;

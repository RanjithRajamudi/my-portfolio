import { motion } from "motion/react";
import Services_Data from "../../assets/services_data.js";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Services
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="services-container"
      >
        {Services_Data.map((service, index) => {
          return (
            <motion.div
              initial={{ rotateX: -70 }}
              whileInView={{ rotateX: 0 }}
              key={service + index}
              className="services-format"
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Services;

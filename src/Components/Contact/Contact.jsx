import { motion } from "motion/react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "de7d41ca-c412-4716-bba9-bb923c4af398");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact">
      <div id="contact" className="contact-title">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get in touch
        </motion.h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let&apos;s Talk
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I am currently working for a famous mobility company. Got an idea or
            just want to say Hi? Drop a message!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="contact-details"
          >
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ranjithrajmudigowda@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+29724 232832</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bangalore, India</p>
            </div>
          </motion.div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <motion.input
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="text"
            placeholder="Enter your name"
            name="name"
          />

          <motion.input
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <motion.textarea
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></motion.textarea>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            type="submit"
            className="contact-submit"
          >
            Submit now
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

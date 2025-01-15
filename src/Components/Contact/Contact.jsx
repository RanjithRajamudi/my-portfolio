import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
        <h1>
          Get in touch
        </h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let&apos;s Talk</h3>
          <p>
            I am currently working for a famous mobility company. Got an idea or
            just want to say Hi? Drop a message!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaEnvelope size={25} />
              <p>ranjithrajmudigowda@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt size={25} />
              <p>+91 90668 03784</p>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt size={25} />
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <input
            type="text"
            placeholder="Enter your name"
            required
            minLength="3"
            maxLength="50"
            name="name"
          />

          <input
            type="email"
            required
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

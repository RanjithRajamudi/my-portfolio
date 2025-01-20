import { init } from "ityped";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import hero_image from "../../assets/my_image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef();
  const isTypedRef = useRef(false); // Ref to track if typing effect is initialized

  useEffect(() => {
    // Ensure typing is only initialized once
    if (!isTypedRef.current) {
      // Initialize typing effect
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: [
          "FrontEnd Developer",
          "Web Developer",
          "Web Designer",
          "React Developer",
        ],
      });
      isTypedRef.current = true;
    }
    // Cleanup function to avoid multiple initializations on re-render
    return () => {};
  }, []);

  return (
    <div id="home" className="hero">
      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        src={hero_image}
        alt=""
      />
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! 👋🏼 I&apos;m <span> Ranjith </span>{" "}
      </motion.h3>
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I am a <span ref={textRef}></span>
      </motion.h3>
      <div className="hero-action">
        <button className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </button>
        <button className="hero-resume">
          <a
            className="resume-link"
            href="https://drive.google.com/file/d/1LbkZnI-VLCc9wBN9MDeTn0T61WOnLgcb/view"
          >
            <span>My resume</span>
            <FaDownload size={20} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

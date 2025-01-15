import { init } from "ityped";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import my_image from "../../assets/my_image copy.png";
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
          "Front End Developer",
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
        src={my_image}
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
        <button className="hero-resume">My resume</button>
      </div>
    </div>
  );
};

export default Hero;

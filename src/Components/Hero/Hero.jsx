import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h3>
        Hi! I&apos;m <span> Ranjith </span>👋🏼{" "}
      </h3>
      <h3>And I&apos;m a frontend developer</h3>
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

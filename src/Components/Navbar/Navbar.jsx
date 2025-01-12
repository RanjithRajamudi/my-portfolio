import { useRef, useState } from "react";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1>
        Ranji<span className="heart">th.</span>
      </h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink
            className={menu === "home" ? "anchor-link-selected" : "anchor-link"}
            href="#home"
          >
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {/* {menu === "home" ? <img src={underline} alt="" /> : <></>} */}
        </li>
        <li>
          <AnchorLink
            className={
              menu === "about" ? "anchor-link-selected" : "anchor-link"
            }
            offset={80}
            href="#about"
          >
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              menu === "services" ? "anchor-link-selected" : "anchor-link"
            }
            offset={80}
            href="#services"
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={menu === "work" ? "anchor-link-selected" : "anchor-link"}
            offset={80}
            href="#works"
          >
            <p onClick={() => setMenu("work")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={menu === "contact" ? "anchor-link-selected" : "anchor-link"}
            offset={80}
            href="#contact"
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      {/* <button className="nav-connect">
        <AnchorLink className="anchor-link" offset={80} href="#contact">
          Connect with me
        </AnchorLink>
      </button> */}
    </div>
  );
};

export default Navbar;

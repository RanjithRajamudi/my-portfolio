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

  const handleOnClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">
      <h1>
        Ranji<span>th.</span>
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
            <p onClick={() => handleOnClick("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              menu === "about" ? "anchor-link-selected" : "anchor-link"
            }
            offset={80}
            href="#about"
          >
            <p onClick={() => handleOnClick("about")}>About</p>
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
            <p onClick={() => handleOnClick("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={menu === "work" ? "anchor-link-selected" : "anchor-link"}
            offset={80}
            href="#works"
          >
            <p onClick={() => handleOnClick("work")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              menu === "contact" ? "anchor-link-selected" : "anchor-link"
            }
            offset={80}
            href="#contact"
          >
            <p onClick={() => handleOnClick("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

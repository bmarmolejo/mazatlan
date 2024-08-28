import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#learn">
                Learn More
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar">
          <div className="navbar__img">
            <a href="#home" onClick={() => window.scrollTo(0, 0)}>
              {/* <img src={Logo} alt="logo-img" /> */}
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="about-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="learn-link" href="#learn">
                Learn More
              </a>
            </li>
            <li>
              <a className="faq-link" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

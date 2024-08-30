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
              <Link
                onClick={openNav}
                to="https://form.jotform.com/242406484410248"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={openNav}
                to="hhttps://form.jotform.com/242377954527266"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar">
          <ul className="navbar__links">
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
              <Link
                className="contact-link"
                to="https://form.jotform.com/242406484410248"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link
              className="navbar__buttons__booking"
              to="https://form.jotform.com/242377954527266"
            >
              Book Now
            </Link>
          </div>
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

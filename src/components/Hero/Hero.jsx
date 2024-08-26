import { Link } from "react-router-dom";
import BgShape from "../../assets/images/hero-bg.jpg";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import "./Hero.scss";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    window.location.href = 'https://form.jotform.com/242377954527266';
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Experience the Charm of Mazatlán Before It’s Unveiled</h4>
              <h1>
                Secure your stay <span>now! </span>
              </h1>
              <p>
                Discover a unique opportunity to stay at our brand-new, soon-to-be-completed apartment in the heart of Mazatlán. While construction wraps up and the final touches are added, we're opening our doors exclusively to family and friends at a special rate. Be among the first to enjoy this modern space, designed with comfort and relaxation in mind, just steps away from Mazatlán’s stunning beaches and vibrant culture.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-condo"
                  to="/"
                >
                  Book Condo &nbsp; <IconCircleCheck />
                </Link>
                <Link
                  className="hero-content__text__btns__learn-more"
                  to="/learn"
                >
                  Learn More &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;

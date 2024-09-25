import { useState } from "react";
import "./Prices.scss";

function Price() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="price-section">
        <div className="container">
          <div className="price-content">
            <div className="price-content__title">
              <h2>Accommodation Pricing</h2>
              {/* <p>
                Frequently asked questions about the rental booking process on
                our website: Answers to common concerns and inquiries.
              </p> */}
            </div>

            <div className="all-questions">
              <div className="price-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`price-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>Short-Term Stays (100 USD / Night)</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Ideal for a quick getaway or a short business trip, offering
                  comfort and convenience for your stay.
                </div>
              </div>
              {/* <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>Weekly Stays (Weekly Rate: $650 USD)</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  For those looking to enjoy a full week of relaxation or remote
                  work, this option provides the best value for medium-length
                  visits.{" "}
                </div>
              </div> */}
              <div className="price-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`price-box__question ${getClassQuestion("q3")}`}
                >
                  <p>Month-Long Stays (Monthly Rate: $2,300 USD)</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`price-box__answer ${getClassAnswer("q3")}`}
                >
                  Perfect for extended stays, whether you're escaping the cold
                  for a few months, working remotely, or enjoying a long
                  vacation. Save more with this option and enjoy a home away
                  from home for an extended period.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="price-content__button">
        <a href="https://form.jotform.com/242377954527266" target="_blank" rel="noopener noreferrer">
                <button>Book Now</button>
              </a>            </div>
      </section>
    </>
  );
}

export default Price;

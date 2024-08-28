import { useState } from "react";
import "./Faq.scss";

function Faq() {
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
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. When do I need to make the payment?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  To confirm your reservation and secure your dates, we ask for payment in advance. The idea behind offering this opportunity to family and friends is to gather funds early so we can fully prepare the apartment for your stay. Once payment is received, your dates will be locked in and you can look forward to a comfortable stay in Mazatlán.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. What if I don't know how the apartment will look like inside?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  We understand that not knowing the exact decor might raise questions, but rest assured, the apartment will be ready and beautifully prepared for your arrival. While some details are still being finalized, we promise it will be equipped with all the essentials for a comfortable stay. The apartment will feature air conditioning, smart TVs, internet, a cozy bedroom with a queen-size bed, another bedroom with at least twin beds, and a sofa bed in the living room. Our goal is to make it stylish and comfortable for you.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How far is the apartment from the beach?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  The apartment is conveniently located just 250 meters from the beach, placing you within a short stroll of Mazatlán's stunning shoreline. You'll also be near the vibrant Malecón, a lively area filled with restaurants, shops, and cultural attractions. It's the perfect spot to experience the best of what Mazatlán has to offer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
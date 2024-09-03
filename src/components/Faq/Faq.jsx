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
                Frequently asked questions about the rental booking process
                on our website: Answers to common concerns and inquiries.
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
To confirm your reservation and secure your dates, we require payment in advance. Once the payment is received, we will finalize all preparations for your stay, ensuring a comfortable experience in Mazatlán.</div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. What features and comforts are included in the condo?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
Our condo is designed with your comfort in mind, offering everything you need for a relaxing stay. You'll enjoy air conditioning, smart TVs, high-speed internet, a cozy bedroom with a queen-size bed, an additional bedroom with twin beds, and a sofa bed in the living room. Our goal is to make the space stylish, welcoming, and perfectly suited for your needs.                </div>
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
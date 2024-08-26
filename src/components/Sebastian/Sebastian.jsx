import Rooftop from "../../assets/sebastian/rooftop.jpg";
import Front from "../../assets/sebastian/front.jpg";
import Condo from "../../assets/sebastian/condo.jpg";

import "./Sebastian.scss";

function Sebastian() {
  return (
    <>
      <section className="sebastian-section">
        <div className="container">
          <div className="sebastian-container">
            <div className="sebastian-container__title">
              <h3>Welcome to Your Coastal Getaway in Mazatlán</h3>
              <h2>Book now and take advantage of early access pricing. </h2>
            </div>

            <div className="sebastian-container__boxes">
              <div className="sebastian-container__boxes__box">
                <img src={Front} alt="icon_img" />
                <h3>Building</h3>
                <ul>
                  <li>Automated car lift parking system.</li>
                  <li>One secure parking spot.</li>
                  <li>24/7 security and surveillance.</li>
                  <li>Modern building with elevator access.</li>
                </ul>
              </div>

              <div className="sebastian-container__boxes__box">
                <img src={Rooftop} alt="icon_img" />
                <h3>Rooftop</h3>
                <ul>
                  <li>Stunning ocean views from the rooftop.</li>
                  <li>Infinity pool for relaxation.</li>
                  <li>Barbecue areas and spacious terraces.</li>
                  <li>Perfect for entertaining or unwinding.</li>
                </ul>
              </div>

              <div className="sebastian-container__boxes__box">
                <img src={Condo} alt="icon_img" />
                <h3>Apartment Layout</h3>
                <ul>
                  <li>Two bedrooms, each with a private bathroom.</li>
                  <li>Half bathroom in the living area.</li>
                  <li>Fully equipped kitchen.</li>
                  <li>In-unit washer and dryer.</li>
                  <li>Private balcony for outdoor enjoyment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sebastian;
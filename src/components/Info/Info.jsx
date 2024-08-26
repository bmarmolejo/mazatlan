import MainImg from "../../assets/info/main.png";
import Box1 from "../../assets/info/icon1.png";
import Box2 from "../../assets/info/icon2.png";
import Box3 from "../../assets/info/icon3.png";

import "./Info.scss";

function Info() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Beautiful Condo in Mazatlán</h4>
                <h2> Steps away from the Beach and Malecón</h2>
                <p>
                Discover a unique opportunity to experience luxury living in our brand-new, beautifully designed condo in the heart of Mazatlán. 
                <br /><br />While the final touches are being completed, we're offering this modern space exclusively to family and friends at a special rate. We welcome both short and long-term stays, with payment required to secure your booking. 
                <br /><br />Enjoy a comfortable and stylish retreat just steps away from Mazatlán’s stunning beaches and vibrant culture. 
                </p>
                <a href="#home">
                  Book Now &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Fully Equipped for Your Comfort</h4>
                    <p>
                    Our brand-new condo will be fully furnished and will include everything you need to feel at home. Enjoy flat-screen TVs in every room, a fully equipped kitchen with all the essentials, washer and dryer, high-speed Wi-Fi and air conditioning throughout. </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Secure and Modern Amenities</h4>
                    <p>
                    Housed on the third floor of a secure tower with 24-hour access, our condo provides peace of mind during your stay. Enjoy access to a community pool, roof garden, and barbecue area, perfect for relaxing and entertaining.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Prime Location</h4>
                    <p>
                    Located just a short walk from the beach, the Malecón, and a variety of restaurants, our condo offers the perfect spot for enjoying Mazatlán’s vibrant coastal life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
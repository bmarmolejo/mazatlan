import "./Links.scss";

function Links() {
  return (
    <>
      <section className="links-section">
        <div className="container">
          <div className="links-container">
            <div className="links-container__title">
              <h3>Explore local attractions</h3>
              <h2>Links of interest</h2>
            </div>

            <div className="links-container__boxes">
              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://www.en.gomazatlan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go Mazatlan
                  </a>
                </h3>
                <ul>
                  <li>Official Tourism Site.</li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://en.centrohistoricomazatlan.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Historic Center of Mazatlán
                  </a>
                </h3>
                <ul>
                  <li>
                    A guide to exploring the city's historic downtown area,
                    including museums, theaters, and colonial architecture.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://granacuario.com/eng/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mazatlán Aquarium
                  </a>
                </h3>
                <ul>
                  <li>
                    Details about visiting one of the largest aquariums in Latin
                    America.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://www.voyagemexique.info/en/el-faro-mazatlan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    El Faro Lighthouse
                  </a>
                </h3>
                <ul>
                  <li>
                    Information on visiting the famous Mazatlán lighthouse, one
                    of the tallest in the world.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://www.olasaltasbeach.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Playa Olas Altas
                  </a>
                </h3>
                <ul>
                  <li>
                    Information on the popular surfing and swimming beach.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://www.tripadvisor.ca/Restaurants-g150792-c8-Mazatlan_Pacific_Coast.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mazatlán Restaurants and Cafes
                  </a>
                </h3>
                <ul>
                  <li>
                    A curated list of recommended dining spots in the city.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://mazatlanvisit.com/mazatlan-golfing.html#google_vignette"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Golf Courses in Mazatlán
                  </a>
                </h3>
                <ul>
                  <li>
                    Information on local golf courses for guests interested in
                    golfing.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://www.viator.com/en-CA/Mazatlan-attractions/Stone-Island/overview/d4151-a10242"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Isla de la Piedra (Stone Island)
                  </a>
                </h3>
                <ul>
                  <li>
                    Information on visiting this beautiful beach island just off
                    the coast of Mazatlán.
                  </li>
                </ul>
              </div>

              <div className="links-container__boxes__box">
                {/* <img src={Front} alt="icon_img" /> */}
                <h3>
                  <a
                    href="https://www.fodors.com/world/mexico-and-central-america/mexico/mazatlan/things-to-do/shopping"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shopping in Mazatlán
                  </a>
                </h3>
                <ul>
                  <li>
                    Recommendations for markets, artisan shops, and local
                    boutiques.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Links;

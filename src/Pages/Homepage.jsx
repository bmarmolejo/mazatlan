import Hero from "../components/Hero/Hero";
import Sebastian from "../components/Sebastian/Sebastian";
import Gallery from "../components/Gallery/Gallery";
import Banner from "../components/Banner/Banner";
import Info from "../components/Info/Info";
import Faq from "../components/Faq/Faq";
import Links from "../components/Links/Links";
import Prices from "../components/Prices/Prices";

function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Sebastian />
      </div>
      <div id="learn">
        <Banner />
        <Info />
      </div>
      <div id="prices">
        <Prices />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Links />
      <Gallery />
    </>
  );
}

export default Home;

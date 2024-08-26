import Hero from "../components/Hero/Hero";
import Sebastian from "../components/Sebastian/Sebastian";
import Gallery from "../components/Gallery/Gallery";
// import BookCondo from "../components/BookCondo/BookCondo";
// import PlanTrip from "../components/PlanTrip";
// import PickCar from "../components/PickDates/PickDates";
import Banner from "../components/Banner/Banner";
// import ChooseUs from "../components/ChooseUs";
// import Testimonials from "../components/Testimonials";
// import Faq from "../components/Faq";
// import Download from "../components/Download";
// import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      {/* <BookCondo /> */}
      {/* <PickDates /> */}
      <Sebastian />
      {/* <Banner /> */}
      <Gallery />


      {/*
      
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer /> 
      */}
    </>
  );
}

export default Home;
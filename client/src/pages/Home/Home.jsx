import React from 'react';
import Promo from "./Promo/Promo";
import Banners from "./Banners/Banners";
import About from "./About/About";
import Shop from "./Shop/Shop";
import Testimonials from "./Testimonials/Testimonials";
import Offer from "./Offer/Offer";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Gallery from "./Gallery/Gallery";
import News from "./News/News";
import Subscribe from "./Subscribe/Subscribe";

function Home() {
  return (
    <>
      <Promo/>
      <Banners/>
      <About/>
      <Shop/>
      <Testimonials/>
      <Offer/>
      <WhoWeAre/>
      <Gallery/>
      <News/>
      <Subscribe/>
    </>
  );
}

export default Home;
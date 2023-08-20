import GlobalStyles from "./styles/global";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./styles/theme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Promo from "./components/promo/Promo";
import Banners from "./components/banners/Banners";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Testimonials from "./components/testimonials/Testimonials";
import Offer from "./components/offer/Offer";
import WhoWeAre from "./components/who-we-are/WhoWeAre";
import Gallery from "./components/gallery/Gallery";
import News from "./components/news/News";
import {Subtitle} from "./styles/common";
import Subscribe from "./components/subscribe/Subscribe";
import CompletedOrder from "./components/completedOrder/CompletedOrder";
import Error404 from "./components/error-404/Error404";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles/>
        <Header/>
        <main>
          <Error404/>
          <CompletedOrder/>
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
        </main>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;

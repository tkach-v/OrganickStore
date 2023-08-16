import GlobalStyles from "./styles/global";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./styles/theme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Promo from "./components/promo/Promo";
import Banners from "./components/banners/Banners";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles/>
        <Header/>
        <main>
          <Promo/>
          <Banners/>
        </main>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;

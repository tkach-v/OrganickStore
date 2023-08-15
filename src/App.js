import GlobalStyles from "./styles/global";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./styles/theme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Promo from "./components/promo/Promo";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles/>
      <Header/>
      <main>
        <Promo/>
      </main>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

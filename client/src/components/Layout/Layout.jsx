import GlobalStyles from "../../assets/styles/global";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../../assets/styles/theme";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles/>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </ThemeProvider>
  )
};

export default Layout;
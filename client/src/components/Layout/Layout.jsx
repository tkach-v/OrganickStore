import GlobalStyles from "../../assets/styles/global";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../../assets/styles/theme";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
};

export default Layout;
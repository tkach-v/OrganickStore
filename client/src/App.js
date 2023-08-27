import GlobalStyles from "./assets/styles/global";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./assets/styles/theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Сart/Cart";
import NoPage from "./pages/NoPage/NoPage";
import CompletedOrder from "./pages/CompletedOrder/CompletedOrder";
import Orders from "./pages/Admin/Orders";
import Products from "./pages/Admin/Products";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="completed-order" element={<CompletedOrder/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
          <Route path="/admin/orders" element={<Orders/>}/>
          <Route path="/admin/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
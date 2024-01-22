import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";

import { Provider } from "react-redux";

import Categories from "./components/pages/Categories";
import Footer from "./components/Footer";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import NotFound from "./components/pages/NotFound";

import "./styles/reset.scss";
import Cart from "./components/pages/Cart";
import { store } from "./redux/store";

console.log(store.getState());

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Products isCategory={true} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/sale" element={<Products onlySale={true} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

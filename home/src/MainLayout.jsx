import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
import PDPContent from "pdp/PDPContent";
import HomeContent from "./HomeContent";
import CartContent from "cart/CartContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainLayout = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeContent />}></Route>
        <Route path="/product/:id" element={<PDPContent />}></Route>
        <Route path="/cart" element={<CartContent />}></Route>
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default MainLayout;

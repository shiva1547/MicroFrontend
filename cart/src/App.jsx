import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
import CartContent from "./CartContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <CartContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./assets/Cart/Cart";
import Header from "./assets/Home/Header";
import Home from "./assets/Home/Home";
import "./index.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

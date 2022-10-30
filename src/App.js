import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/training' element={<Training/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;

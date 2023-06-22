import React from "react";
import Header from "./components/Header/Header";
import Sale from "./components/Sale/Sale";
import Slider from "./components/Slider/Slider";
import Menu from "./components/Menu/Menu";
import Benefitss from "./components/Benefitss/Benefitss";
import Footer from "./components/Footer/Footer";
import FullMenu from "./components/FullMenu/FullMenu";
import Login from "./components/Login/Login";
import ScheduleWork from "./components/ScheduleWork/ScheduleWork";
import SelectionCity from "./components/SelectionCity/SelectionCity";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import style from "./App.css";
import Footer2 from "./components/Footer2/Footer2";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className={style.color}> 
        <div className="fonts">
          <Routes>
            <Route path="/" element={<Slider/>}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Sale/>}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Menu/>}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Benefitss/>}></Route>
          </Routes>
        </div>  
      </div>
      <Routes>
          <Route path="Full-Menu" element={<FullMenu/>}></Route>
      </Routes>
      <Routes>
          <Route path="Full-Menu" element={<Footer2/>}></Route>
      </Routes>
      <Routes>
            <Route path="/" element={<Footer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Recipes from "./components/pages/Recipes";
import About from "./components/pages/About";
import Logout from "./components/pages/Logout";
import Contact from "./components/pages/Contact";
import Silder from "./components/slider/Silder";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop />
        <Header />
        <Silder />
        <Card />
        <Contact />
        <Footer />
        <Routes>

          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

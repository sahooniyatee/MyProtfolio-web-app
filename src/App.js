import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Intro/Intro";
import './App.css';
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
// import Work from "./Components/Work/work";
import Protfolio from "./Components/Protfolio/Protfolio";
import Testimonial from "./Components/Testimonials/Testtimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services />
      <Experience/>
      {/* <Work /> */}
      <Protfolio/>
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

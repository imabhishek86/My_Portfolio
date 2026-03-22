import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className={`${darkMode ? "bg-site text-white" : "bg-white text-gray-900"} bg-no-repeat bg-cover overflow-hidden min-h-screen transition-all duration-500`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Banner />
        <Nav />
        <About darkMode={darkMode} />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
        <FloatingContact />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;

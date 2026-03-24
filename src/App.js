import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./utils/Themes";
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
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("themeName");
    return savedTheme && themes[savedTheme] ? savedTheme : "dark";
  });

  const themeData = themes[currentTheme];

  useEffect(() => {
    localStorage.setItem("themeName", currentTheme);
    if (currentTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={themeData}>
      <div 
        className="bg-no-repeat bg-cover overflow-hidden min-h-screen transition-all duration-500"
        style={{ 
          backgroundColor: themeData.bg,
          backgroundImage: currentTheme === "dark" ? "url('./assets/site-bg.jpg')" : "none",
          color: themeData.text_primary,
          "--primary-color": themeData.primary,
          "--bg-color": themeData.bg,
          "--text-color": themeData.text_primary,
        }}
      >
        <div className="dark:text-white text-gray-900">
           <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
           <Banner />
           <Nav />
           <About currentTheme={currentTheme} />
           <Skills />
           <Education />
           <Achievements />
           <Projects />
           <Contact />
           <Footer />
           <FloatingContact />
           <ScrollToTop />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

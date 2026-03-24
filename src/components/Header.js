import React from "react";
import { themes } from "../utils/Themes";
import MotionWrapper from "./MotionWrapper";

const Header = ({ currentTheme, setCurrentTheme }) => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
          {/*logo*/}
          <a href="#home" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition-all cursor-pointer">
            Abhishek.
          </a>
          
          <div className="flex items-center gap-6">
            {/* Theme Selector Dots */}
            <div className="flex items-center gap-3 bg-black/10 dark:bg-white/5 p-2 rounded-full backdrop-blur-sm border border-black/5 dark:border-white/10">
              {Object.keys(themes).map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => setCurrentTheme(themeName)}
                  className={`w-6 h-6 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    currentTheme === themeName 
                    ? "ring-2 ring-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                    : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: themes[themeName].primary }}
                  title={`${themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme`}
                  aria-label={`Switch to ${themeName} theme`}
                />
              ))}
            </div>

            {/*button*/}
            <MotionWrapper>
              <a
                href="#contact"
                className="btn btn-sm flex justify-center items-center"
              >
                Contact me
              </a>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

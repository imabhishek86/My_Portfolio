import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import MotionWrapper from "./MotionWrapper";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <a href="#home" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition-all cursor-pointer">
            Abhishek.
          </a>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <MotionWrapper>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full bg-accent/20 text-accent transition-all duration-300 shadow-[0_0_15px_rgba(133,76,230,0.3)]"
                aria-label="Toggle Theme"
              >
                {darkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
              </button>
            </MotionWrapper>

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

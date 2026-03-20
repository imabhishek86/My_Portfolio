import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <a href="#" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition-all cursor-pointer">
            Abhishek.
          </a>
          {/*button*/}
          <a
            href="#contact"
            className="btn btn-sm flex justify-center items-center"
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

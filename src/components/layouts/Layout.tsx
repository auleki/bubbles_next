import React from "react";
import Logo from "../brand/Logo";
import Footer from "./Footer";
import Navbar from "../common/navigation/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black-400 text-white sm:h-screen sm:overflow-hidden ">
      <nav className="flex items-center justify-between p-4">
        <span className="font-semibold text-slate-300">COMING SOON!</span>
        {/* <Logo /> */}
        {/* <Navbar /> */}
      </nav>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

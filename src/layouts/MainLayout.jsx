import React, { useEffect, useState,  } from "react";
import Header from "../components/Header";
import { Outlet, useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Modal from "../components/Home/Modal";

// import Breadcrumps from "../components/Breadcrumps";

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const path = location.pathname;
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`
        ${open ? "w-full " : "w-0"}
           h-full fixed left-0 z-[80] top-0 bg-black/50`}
        onClick={() => setopen(false)}
      >
        <div
          className={`${
            open ? " block w-1/2" : " hidden w-0"} h-full absolute bg-white top-0 z-[70] right-0 transition-all duration-500`}>
            
            <div className="flex  py-3">
            <h3 className="mr-64 pl-2">Menyu</h3>
            <button className="font-bold">X</button>
          </div>
          <div className="flex flex-col py-4 pl-3 space-y-3">
            <Link to='/'>Bosh sahifa</Link>
            <Link path="/Aktsiya">Aksiya</Link>
            <Link path="/ShifokorlarX">Bizning shifokorlar</Link>
            <Link path="/barchaxizmatlar">Xizmatlar</Link>
          </div>
        </div>
      </div>

      <Header setopen={setopen} />
      {/* { path !== "/" && <Breadcrumps />} */}
      <Modal className="fixed" />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

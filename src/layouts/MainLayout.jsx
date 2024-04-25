import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Modal from "../components/Home/Modal";

// import Breadcrumps from "../components/Breadcrumps";

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [location.pathname])
  const path = location.pathname;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* { path !== "/" && <Breadcrumps />} */}
      <Modal className='bg-orange-700 absolute right-0'/>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

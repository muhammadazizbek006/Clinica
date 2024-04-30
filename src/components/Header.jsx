import React, { useState } from "react";
import { Link } from "react-router-dom";


// draw

// img

import arrow from "../img/arrow.svg";
import logo from "../img/logo.svg";
import hamburger from "../img/menu.svg";
const Header = ({ setopen }) => {
  // const [openRight, setOpenRight] = React.useState(false);
  // const openDrawerRight = () => setOpenRight(true);
  // const closeDrawerRight = () => setOpenRight(false);
  // naxr
  const [down, setDown] = useState(false);

  const handleOpen = () => {
    setDown(true);
  };
  const handleClose = () => {
    setDown(false);
  };

  const openMenu = () => {
    setopen(true);
  };

  return (
    <header className="py-3 bg-header sticky  top-0  z-50 relative">
      <div className="containerb flex  justify-between items-center">
        {/* logo */}
        <Link className=" w-28 h-full  sm:w-36 sm:h-11 block lg:hidden xl:block " to="/">
        <img src={logo} alt='logo' />
        </Link>
        {/* nav */}
        <nav className="relative hidden lg:block   ">
          <ul className="text-base font-medium flex items-center   lg:space-x-7 xl:space-x-10    ">
            {/* xizmatlar va narxlar */}
            <li onMouseMove={handleOpen} onMouseLeave={handleClose}>
              <Link className="flex ">
                <span>Xizmatlar va narxlar</span>
                <img className="rotate-180" src={arrow} alt={arrow} />
              </Link>
            </li>
            {/*Aksiya  */}
            <li>
              <Link to="/Aktsiya">Aksiya</Link>
            </li>

            {/* xizmatlar */}
            <Link to="/Barchaxizmatlar">Xizmatlar</Link>

            {/* Bizning shifokorlarimiz */}
            <li>
              <Link to="/ShifokorlarX">Bizning shifokorlarimiz</Link>
            </li>

            {/* Klinika haqida */}
            <li>
              <Link to="/kilinikaxaqida">Klinika haqida</Link>
            </li>

            {/* Kontaktlar */}
            <li>
              <Link to="/kontaktlar">Kontaktlar</Link>
            </li>
          </ul>

          {down && (
            <div
              onMouseMove={handleOpen}
              onMouseLeave={handleClose}
              className={` absolute left-0 top-6    flex flex-col shadow-md `}
            >
              <Link
                to="/Tish shifokori bilan maslahatlashuv"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header "
              >
                Tish shifokori bilan maslahatlashuv
              </Link>

              <Link
                to="/BolalarStamatalogiyasi"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Bolalar stomatologiyasi
              </Link>

              <Link
                to="/Terapevtik"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Terapevtik xizmatlar
              </Link>

              <Link
                to="/EstetikStamatalogika"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Estetik stamatalogiya
              </Link>
              <Link
                to="/PeriAdanatalogiya"
                className=" pl-2 py-3  w-[300px]  inline-block bg-white border-b-2 border-header"
              >
                Peri Adanatalogiya
              </Link>
              <Link
                to="/Protezlash"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Pratezlash
              </Link>

              <Link
                to="/implantatsiya"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Implantatsiya va jarrohlik
              </Link>

              <Link
                to="/ortodontiya"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Ortodontiya
              </Link>

              <Link
                to="/Diagnostika"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 "
              >
                Diagnostika jarayoni
              </Link>
            </div>
          )}
        </nav>

        {/* telefont va ijtimoiy tarmoqlar */}
        <div className="flex  justify-center items-center sm:flex-row md:flex-col ">
          <a className="mb-3 hidden md:block " href="tel:+998914750612">+998 91 475 06 12</a>
         
          <div className="flex space-x-3  lg:space-x-5">
            {/* vk */}
            <a
              className=" bg-white rounded-full w-8 h-8"
              href="https://vk.com/clinica_native"
              target="_blank"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.786 21.5999C10.7727 21.5999 7.34286 17.3957 7.19995 10.3999H10.2121C10.311 15.5346 12.5316 17.7096 14.2905 18.1581V10.3999H17.1267V14.8283C18.8637 14.6377 20.6885 12.6197 21.3041 10.3999H24.1404C23.9084 11.5512 23.446 12.6412 22.782 13.6019C22.1181 14.5626 21.2669 15.3732 20.2818 15.9831C21.3814 16.5403 22.3527 17.3291 23.1316 18.2973C23.9104 19.2655 24.479 20.3911 24.7999 21.5999H21.6779C21.3898 20.55 20.8043 19.6101 19.9947 18.8982C19.1851 18.1862 18.1874 17.7337 17.1267 17.5975V21.5999H16.786Z"
                  fill="#BADF93"
                ></path>
              </svg>
            </a>
            {/* telegram */}
            <a
              title="Telegramga yozing"
              className="flex items-center justify-center bg-white rounded-full  w-8 h-8"
              href="https://t.me/Umarov_Dev"
              target="_blank"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3536_14011)">
                  <path
                    d="M16.5387 1.59798L0.591584 7.77936C-0.0501582 8.06722 -0.267213 8.64368 0.436475 8.95653L4.52761 10.2634L14.4195 4.11843C14.9596 3.73266 15.5125 3.83553 15.0367 4.2599L6.54094 11.992L6.27406 15.2642C6.52125 15.7694 6.97385 15.7718 7.26255 15.5207L9.61303 13.2851L13.6386 16.3151C14.5736 16.8715 15.0823 16.5125 15.2835 15.4927L17.9239 2.92537C18.198 1.67012 17.7305 1.11704 16.5387 1.59798Z"
                    fill="#BADF93"
                  ></path>
                </g>
              </svg>
            </a>
            {/* whatsapp */}
            <a
              className="flex items-center justify-center bg-white rounded-full  w-8 h-8"
              title="WhatsApp ga yozing"
              target="_blank"
              href="https://wa.me/+998914750612"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#fff"></rect>
                <path
                  d="M22.3415 9.64995C20.761 8.07495 18.6537 7.19995 16.4293 7.19995C11.8049 7.19995 8.05854 10.9333 8.05854 15.5416C8.05854 17 8.46829 18.4583 9.17073 19.6833L8 24L12.4488 22.8333C13.6781 23.475 15.0244 23.825 16.4293 23.825C21.0537 23.825 24.8 20.0916 24.8 15.4833C24.7415 13.325 23.9219 11.225 22.3415 9.64995ZM20.4683 18.5166C20.2927 18.9833 19.4732 19.45 19.0634 19.5083C18.7122 19.5666 18.2439 19.5666 17.7756 19.45C17.4829 19.3333 17.0732 19.2166 16.6049 18.9833C14.4976 18.1083 13.1512 16.0083 13.0341 15.8333C12.9171 15.7166 12.1561 14.7249 12.1561 13.675C12.1561 12.6249 12.6829 12.1583 12.8585 11.925C13.0341 11.6916 13.2683 11.6916 13.4439 11.6916C13.561 11.6916 13.7366 11.6916 13.8537 11.6916C13.9707 11.6916 14.1463 11.6333 14.322 12.0416C14.4976 12.45 14.9073 13.5 14.9659 13.5583C15.0244 13.675 15.0244 13.7916 14.9659 13.9083C14.9073 14.025 14.8488 14.1416 14.7317 14.2583C14.6146 14.3749 14.4976 14.55 14.439 14.6083C14.3219 14.725 14.2049 14.8416 14.322 15.0166C14.439 15.2499 14.8488 15.8916 15.4927 16.4749C16.3122 17.1749 16.9561 17.4083 17.1902 17.525C17.4244 17.6416 17.5415 17.5833 17.6585 17.4666C17.7756 17.3499 18.1854 16.8833 18.3024 16.65C18.4195 16.4166 18.5951 16.475 18.7707 16.5333C18.9463 16.5916 20 17.1166 20.1756 17.2333C20.4098 17.35 20.5268 17.4083 20.5854 17.4666C20.6439 17.6416 20.6439 18.0499 20.4683 18.5166Z"
                  fill="#BADF93"
                ></path>
              </svg>
            </a>
          </div>
          {/* menu */}

          <button onClick={openMenu} className="block md:hidden ml-3">
            <img src={hamburger} alt="" />
          </button>
        </div>
      </div>

      {/* draw */}
    </header>
  );
};

export default Header;

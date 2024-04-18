import React, { useState } from "react";
import { Link } from "react-router-dom";

// img
import vk from "../img/vk.svg";
import telegram from "../img/telegram.svg";
import whatsapp from "../img/whatsapp.svg";
import arrow from "../img/arrow.svg";
import logo from "../img/logo.svg";
import hamburger from "../img/menu.svg";
const Header = () => {
  // naxr
  const [down, setDown] = useState(false);

  const handleOpen = () => {
    setDown(true);
  };
  const handleClose = () => {
    setDown(false);
  };

  return (
    <header className="py-3 bg-header sticky  top-0  z-50">
      <div className="containerb flex  justify-between items-center">
        {/* logo */}
        <Link className="w-36 h-11 sm:block  1381:block 888:hidden " to="/">
          <svg
            width="140"
            viewBox="0 0 140 43"
            fill="#153E35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_313_191)">
              <path
                d="M12.4687 18.9067C17.1669 18.9067 20.2868 17.8643 23.025 15.8786C22.8562 14.9095 22.6139 13.5551 22.7571 12.1273C19.7326 14.983 16.3667 15.9777 12.9275 15.9777C7.11709 15.9777 4.21373 13.3166 4.21373 9.39279C4.21373 5.22678 7.65298 2.88134 13.0743 2.90336C15.4968 2.92905 18.859 3.50899 22.7571 5.85811C22.5882 4.45231 22.5882 3.41356 22.7571 2.00776C18.8847 0.411095 15.662 0 12.8541 0C4.9882 0 0 3.26674 0 9.39279C0 15.5189 4.5037 18.9067 12.4687 18.9067Z"
                fill="#153E35"
              ></path>
              <path
                d="M45.6169 18.4957C45.5214 17.2844 45.5214 16.3154 45.6169 14.8655C42.3501 15.4235 34.4549 15.7868 30.8982 15.7868C30.7771 11.4043 30.8248 3.87608 31.067 0.462524C29.6869 0.730471 28.0646 0.679084 26.5156 0.462524C26.7102 6.46745 26.7102 12.4944 26.5156 18.4993H45.6169V18.4957Z"
                fill="#153E35"
              ></path>
              <path
                d="M52.9799 18.4957C52.6422 14.0177 52.6422 4.98825 52.9322 0.458862C51.4786 0.701115 49.9297 0.675421 48.3807 0.458862C48.6707 4.98458 48.6707 13.9663 48.3807 18.4957H52.9799Z"
                fill="#153E35"
              ></path>
              <path
                d="M61.6973 18.4957C61.4808 13.6286 61.4074 8.69178 61.4808 3.82471C65.5954 8.61837 69.5412 13.5332 73.3438 18.4957H79.2019C78.9854 12.4907 78.9597 6.46379 79.1285 0.458862C77.7741 0.701115 76.3426 0.675421 74.8194 0.458862C75.0616 5.37365 75.1093 10.3362 75.0359 15.2766C70.969 10.4096 67.0709 5.47276 63.3417 0.458862C61.7451 0.701115 58.9371 0.653398 57.3368 0.458862C57.5313 6.46379 57.5313 12.4907 57.3368 18.4957H61.6937H61.6973Z"
                fill="#153E35"
              ></path>
              <path
                d="M88.213 18.4957C87.8753 14.0177 87.8753 4.98825 88.1653 0.458862C86.7118 0.701115 85.1628 0.675421 83.6139 0.458862C83.9039 4.98458 83.9039 13.9663 83.6139 18.4957H88.213Z"
                fill="#153E35"
              ></path>
              <path
                d="M104.15 18.9067C108.849 18.9067 111.968 17.8643 114.707 15.8786C114.538 14.9095 114.296 13.5551 114.439 12.1273C111.414 14.983 108.048 15.9777 104.609 15.9777C98.7987 15.9777 95.8954 13.3166 95.8954 9.39279C95.8954 5.22678 99.3346 2.88134 104.756 2.90336C107.178 2.92905 110.541 3.50899 114.439 5.85811C114.27 4.45231 114.27 3.41356 114.439 2.00776C110.566 0.411095 107.344 0 104.536 0C96.6662 0 91.6816 3.26674 91.6816 9.39279C91.6816 15.5189 96.1853 18.9067 104.15 18.9067Z"
                fill="#153E35"
              ></path>
              <path
                d="M131.562 0.458862C129.818 0.774525 126.452 0.675421 124.709 0.458862C122.165 6.46379 119.247 12.4907 116.318 18.4957H121.064C121.548 17.3321 122.055 16.0254 122.613 14.693C125.759 14.6196 130.486 14.6196 133.61 14.7187C134.12 16.0034 134.579 17.2844 135.038 18.4957H140C137.071 12.4907 134.102 6.46379 131.562 0.458862ZM123.63 12.2265C125.226 8.3541 127.058 4.52944 128.049 2.68685C129.598 5.5425 131.283 8.88632 132.615 12.2265C130.024 12.2999 126.217 12.2999 123.63 12.2265Z"
                fill="#153E35"
              ></path>
              <path
                d="M23.66 24.2363C22.3056 24.4786 20.8741 24.4529 19.3509 24.2363C19.5931 29.1511 19.6408 34.1136 19.5674 39.0541C15.5005 34.187 11.6024 29.2502 7.87322 24.2363C6.27655 24.4786 3.46862 24.4309 1.86829 24.2363C2.06282 30.2413 2.06282 36.2682 1.86829 42.2731H6.22516C6.0086 37.4061 5.93519 32.4692 6.0086 27.6022C10.1232 32.3958 14.069 37.3106 17.8716 42.2731H20.0005L23.5719 34.9321C23.5352 31.3644 23.5609 27.7967 23.66 24.2363Z"
                fill="#153E35"
              ></path>
              <path
                d="M44.714 24.2363C44.9085 25.3742 44.9085 26.4863 44.714 27.6242C47.232 27.2351 49.8453 27.0186 53.4057 26.9708C53.5269 31.9334 53.5012 38.4962 53.2589 42.2695H57.858C57.6158 38.4925 57.5424 31.9554 57.6635 26.9708C61.2459 27.0186 63.863 27.2388 66.403 27.6242C66.2084 26.4863 66.2084 25.3742 66.403 24.2363C58.4123 24.4309 52.723 24.4309 44.7103 24.2363H44.714Z"
                fill="#153E35"
              ></path>
              <path
                d="M73.788 24.2363C72.3345 24.4786 70.7855 24.4529 69.2366 24.2363C69.5265 28.762 69.5265 37.7437 69.2366 42.2731H73.8357C73.498 37.7951 73.498 28.7657 73.788 24.2363Z"
                fill="#153E35"
              ></path>
              <path
                d="M94.64 24.2363C92.6066 29.1988 89.5307 36.6793 87.9818 39.6818C86.4328 36.6793 83.357 29.1988 81.4923 24.2363C79.8443 24.4309 78.3687 24.4309 76.7244 24.2363C79.7745 30.5055 82.2448 35.9782 84.6893 42.2731H91.1274C93.7408 35.9782 96.0679 30.5055 99.1401 24.2363C97.5654 24.4309 96.211 24.4309 94.6364 24.2363H94.64Z"
                fill="#153E35"
              ></path>
              <path
                d="M102.08 24.2363C102.37 28.6923 102.37 37.674 102.08 42.2731H121.497C121.402 41.0619 121.402 39.7809 121.497 38.5696C118.131 39.1973 111.109 39.5863 106.51 39.5386C106.415 37.8685 106.415 36.1728 106.415 34.5504C110.919 34.455 116.487 34.6238 119.779 34.8184C119.684 33.8494 119.684 32.7592 119.779 31.7682C116.512 31.9847 110.919 32.1793 106.415 32.1059C106.389 30.3881 106.415 28.6666 106.463 26.9488C111.04 26.9011 118.109 27.2865 121.497 27.9399C121.402 26.7286 121.402 25.4953 121.497 24.3097C117.067 24.6474 105.035 24.4786 102.08 24.2363Z"
                fill="#153E35"
              ></path>
              <path
                d="M31.5149 24.2363C28.9712 30.2413 26.0532 36.2682 23.1241 42.2731H27.8701C28.3546 41.1096 28.8611 39.8029 29.419 38.4705C32.5647 38.3971 37.2923 38.3971 40.4158 38.4962C40.926 39.7809 41.3849 41.0619 41.8437 42.2731H46.8062C43.8771 36.2682 40.9077 30.2413 38.3677 24.2363C36.6242 24.552 33.2584 24.4529 31.5149 24.2363ZM30.4358 36.0039C32.0324 32.1316 33.864 28.3069 34.855 26.4643C36.404 29.32 38.0888 32.6638 39.4211 36.0039C36.8298 36.0773 33.0235 36.0773 30.4358 36.0039Z"
                fill="#153E35"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_313_191">
                <rect width="140" height="43" fill="#153E35"></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* nav */}
        <nav className="relative ">
          <ul className="text-base font-medium flex items-center md:flex hidden md:hidden 888:flex md:space-x-2 lg:space-x-6 1129:space-x-14   xl:space-x-5 ">
            {/* xizmatlar va narxlar */}
            <li onMouseMove={handleOpen} onMouseLeave={handleClose}>
              <Link  className="flex ">
                <span>Xizmatlar va narxlar</span>
                <img className="rotate-180" src={arrow} alt={arrow} />
              </Link>
            </li>
            {/*Aksiya  */}
            <li>
              <Link to="/Aktsiya">Aksiya</Link>
            </li>

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
                to="/shifokormaslaxat"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header "
              >
                Tish shifokori bilan maslahatlashuv
              </Link>

              <Link
                to="/BolalarS"
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

              <Link to="/implantatsiya" 
              className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header">Implantatsiya va jarrohlik</Link>

              <Link
                to="/ordontiya"
                className=" pl-2 py-3  w-[300px] inline-block bg-white border-b-2 border-header"
              >
                Pratezlash
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

        {/* onlayn ro'yxatdan o'tish */}
        <button className=" py-4 px-4 hidden xl:block bg-white hover:bg-online-zakaz hover:text-white duration-700">
          Onlayn ro'yxatdan o'tish
        </button>


        {/* telefont va ijtimoiy tarmoqlar */}
        <div className="flex xl:flex-col justify-center items-center">
          <span className="mb-3 inline-block hidden xl:block">
            +998 91 475 06 12
          </span>
          <div className="1381:space-x-2 888:space-x-1 space-x-3 flex">
            {/* vk */}
            <Link>
              <img
                className="bg-white px-3 py-3 rounded-full w-12  fill-header"
                src={vk}
                alt=""
              />
            </Link>
            {/* telegram */}
            <Link>
              <img
                className="bg-white px-3 py-3 rounded-full w-12 "
                src={telegram}
                alt=""
              />
            </Link>
            {/* telegram */}
            <Link>
              <img
                className="bg-white px-3 py-3 rounded-full w-12 "
                src={whatsapp}
                alt=""
              />
            </Link>
          </div>
          {/* menu */}
          <div className="888:hidden ml-3">
            <img src={hamburger} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

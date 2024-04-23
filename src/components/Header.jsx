import React, { useState } from "react";
import { Link } from "react-router-dom";

// draw
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// img

import arrow from "../img/arrow.svg";
import logo from "../img/logo.svg";
import hamburger from "../img/menu.svg";
const Header = () => {
  const [openRight, setOpenRight] = React.useState(false);
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
        <Link className="w-36 h-11 block lg:hidden xl:block " to="/">
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
        <nav className="relative hidden lg:block   ">


          <ul className="text-base font-medium flex items-center   lg:space-x-7 xl:space-x-10    ">
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

            {/* xizmatlar */}
            <Link to='/Barchaxizmatlar'>Xizmatlar</Link>

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
        <div className="flex  justify-center items-center md:flex-row md:flex-col ">
          <span className="mb-3 hidden md:block ">
            +998 91 475 06 12
          </span>
          <div className="flex space-x-3  lg:space-x-5">
            {/* vk */}
            <a class=" bg-white rounded-full w-8 h-8" href="https://vk.com/clinica_native" target="_blank">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.786 21.5999C10.7727 21.5999 7.34286 17.3957 7.19995 10.3999H10.2121C10.311 15.5346 12.5316 17.7096 14.2905 18.1581V10.3999H17.1267V14.8283C18.8637 14.6377 20.6885 12.6197 21.3041 10.3999H24.1404C23.9084 11.5512 23.446 12.6412 22.782 13.6019C22.1181 14.5626 21.2669 15.3732 20.2818 15.9831C21.3814 16.5403 22.3527 17.3291 23.1316 18.2973C23.9104 19.2655 24.479 20.3911 24.7999 21.5999H21.6779C21.3898 20.55 20.8043 19.6101 19.9947 18.8982C19.1851 18.1862 18.1874 17.7337 17.1267 17.5975V21.5999H16.786Z" fill="#BADF93"></path>
                  </svg>
                </a>
            {/* telegram */}
            <a title="Telegramga yozing" class="flex items-center justify-center bg-white rounded-full  w-8 h-8" href="https://t.me/clinica_native" target="_blank">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3536_14011)">
                      <path d="M16.5387 1.59798L0.591584 7.77936C-0.0501582 8.06722 -0.267213 8.64368 0.436475 8.95653L4.52761 10.2634L14.4195 4.11843C14.9596 3.73266 15.5125 3.83553 15.0367 4.2599L6.54094 11.992L6.27406 15.2642C6.52125 15.7694 6.97385 15.7718 7.26255 15.5207L9.61303 13.2851L13.6386 16.3151C14.5736 16.8715 15.0823 16.5125 15.2835 15.4927L17.9239 2.92537C18.198 1.67012 17.7305 1.11704 16.5387 1.59798Z" fill="#BADF93"></path>
                    </g>
                  </svg>
                </a>
            {/* telegram */}
            <a class="flex items-center justify-center bg-white rounded-full  w-8 h-8" title="WhatsApp ga yozing" target="_blank" href="https://wa.me/79827437230?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#fff"></rect>
                    <path d="M22.3415 9.64995C20.761 8.07495 18.6537 7.19995 16.4293 7.19995C11.8049 7.19995 8.05854 10.9333 8.05854 15.5416C8.05854 17 8.46829 18.4583 9.17073 19.6833L8 24L12.4488 22.8333C13.6781 23.475 15.0244 23.825 16.4293 23.825C21.0537 23.825 24.8 20.0916 24.8 15.4833C24.7415 13.325 23.9219 11.225 22.3415 9.64995ZM20.4683 18.5166C20.2927 18.9833 19.4732 19.45 19.0634 19.5083C18.7122 19.5666 18.2439 19.5666 17.7756 19.45C17.4829 19.3333 17.0732 19.2166 16.6049 18.9833C14.4976 18.1083 13.1512 16.0083 13.0341 15.8333C12.9171 15.7166 12.1561 14.7249 12.1561 13.675C12.1561 12.6249 12.6829 12.1583 12.8585 11.925C13.0341 11.6916 13.2683 11.6916 13.4439 11.6916C13.561 11.6916 13.7366 11.6916 13.8537 11.6916C13.9707 11.6916 14.1463 11.6333 14.322 12.0416C14.4976 12.45 14.9073 13.5 14.9659 13.5583C15.0244 13.675 15.0244 13.7916 14.9659 13.9083C14.9073 14.025 14.8488 14.1416 14.7317 14.2583C14.6146 14.3749 14.4976 14.55 14.439 14.6083C14.3219 14.725 14.2049 14.8416 14.322 15.0166C14.439 15.2499 14.8488 15.8916 15.4927 16.4749C16.3122 17.1749 16.9561 17.4083 17.1902 17.525C17.4244 17.6416 17.5415 17.5833 17.6585 17.4666C17.7756 17.3499 18.1854 16.8833 18.3024 16.65C18.4195 16.4166 18.5951 16.475 18.7707 16.5333C18.9463 16.5916 20 17.1166 20.1756 17.2333C20.4098 17.35 20.5268 17.4083 20.5854 17.4666C20.6439 17.6416 20.6439 18.0499 20.4683 18.5166Z" fill="#BADF93"></path>
                  </svg>
                </a>
          </div>
          {/* menu */}

            <button className="block md:hidden ml-3">
              <img src={hamburger} alt="" />
            </button>
            

        </div>
      </div>
          {/* draw */}
      <div>

      </div>
    </header>
  );
};

export default Header;

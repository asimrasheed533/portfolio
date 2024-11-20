"use client";

import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import "@/style/header.scss";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Header({ token }) {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function checkNavOpen() {
    if (window.innerWidth <= 950) {
      setIsOpenMenu(false);
    } else {
      setIsOpenMenu(true);
    }
  }
  useEffect(() => {
    checkNavOpen();

    window.addEventListener("resize", checkNavOpen);
  }, []);

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          if (window.innerWidth <= 950) {
            setIsOpenMenu(false);
          }
        }}
      >
        <div className="nav__bar__container">
          {isOpenMenu ? (
            <div className="nav__entry">
              <Link
                href="/"
                className={`nav__entry__item ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49004 26.3597C10.4289 19.1793 13.3378 12.0672 16.268 4.90812C17.4811 7.98789 18.6814 11.0249 19.9031 14.1133C20.1423 13.8271 20.3687 13.575 20.578 13.3102C21.3853 12.268 21.9919 11.136 22.2225 9.82038C22.4233 8.64571 22.2012 7.5223 21.8424 6.41597C21.4579 5.22422 20.83 4.19051 19.8262 3.41736C19.0915 2.84925 18.2244 2.58441 17.3231 2.46054C12.4749 1.77282 8.55365 3.50706 5.38845 7.1165C3.75246 8.98316 2.74438 11.183 2.34286 13.6306C1.69786 17.5348 2.52653 21.1186 4.88868 24.3008C6.87922 26.9791 9.52756 28.7048 12.7696 29.495C14.4953 29.9179 16.2424 29.9734 18.0065 29.7385C20.6506 29.3882 23.0683 28.4656 25.2083 26.8595C27.5107 25.1295 28.9673 22.8571 29.6037 20.0379C30.0138 18.231 30.2957 16.4156 30.2658 14.5618C30.206 10.7345 29.0399 7.30872 26.5026 4.39127C26.4855 4.37418 26.4727 4.35283 26.4556 4.33147C26.4556 4.3272 26.4556 4.31865 26.4642 4.28875C27.5021 5.07471 28.4675 5.90766 29.1979 7.00544C30.5691 9.06005 31.4832 11.2898 31.8036 13.7331C32.4315 18.5001 31.2184 22.7588 28.1001 26.4281C25.6825 29.2729 22.607 31.084 18.9335 31.7205C13.295 32.6944 8.40842 31.1225 4.40173 27.0175C2.07375 24.6426 0.668419 21.755 0.190008 18.4531C-0.506251 13.6477 0.715406 9.34624 3.78236 5.59157C5.94375 2.94749 8.70316 1.19617 12.0349 0.41448C14.1237 -0.0767455 16.2339 -0.196348 18.3226 0.41448C20.8514 1.15773 22.5258 2.86206 23.5809 5.21994C24.1447 6.48432 24.4907 7.79995 24.4224 9.20101C24.3455 10.837 23.7987 12.3064 22.9102 13.669C21.9064 15.2025 20.6378 16.4754 19.2154 17.6159C15.4479 20.6316 11.5394 23.4679 7.61819 26.2828C7.59683 26.2956 7.57547 26.3085 7.49004 26.3597ZM12.4194 19.9396C12.4194 19.9396 12.445 19.9567 12.4578 19.9695C14.3715 18.5386 16.2894 17.1033 18.2158 15.6638C17.558 13.9979 16.9045 12.3406 16.2296 10.632C14.9396 13.7801 13.6795 16.8598 12.4194 19.9439V19.9396Z"
                    fill="white"
                  />
                  <path
                    d="M21.6837 18.6325C22.6363 21.0417 23.5718 23.4166 24.5115 25.7916C23.9391 26.1291 22.9609 26.0223 22.4142 25.514C22.1579 25.2748 21.9187 24.9715 21.7863 24.6511C21.1925 23.2244 20.6372 21.7807 20.0734 20.3411C20.0435 20.2643 20.0435 20.119 20.0905 20.072C20.6031 19.5936 21.1327 19.128 21.6837 18.6325Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className={`nav__entry__item ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>

              <>
                <Link
                  href="/order"
                  className={`nav__entry__item ${
                    pathname === "/order" ? "active" : ""
                  }`}
                >
                  Order Now
                </Link>
                <Link
                  href="/reviews"
                  className={`nav__entry__item ${
                    pathname === "/reviews" ? "active" : ""
                  }`}
                >
                  Reviews
                </Link>
              </>

              <Link
                href="/contact"
                className={`nav__entry__item ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
              <div className="menu__close__warper">
                <div className="menu__close__title">Menu</div>
                <div
                  onClick={() => setIsOpenMenu(false)}
                  className="menu__close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="header__container__menu__icon"
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="7" y2="0.5" stroke="#C4C4C4" />
              <line y1="3.5" x2="11" y2="3.5" stroke="#C4C4C4" />
              <line y1="6.5" x2="14" y2="6.5" stroke="#C4C4C4" />
            </svg>
          </button>

          <div className="nav__register">
            <button className="nav__register__button">Login</button>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}

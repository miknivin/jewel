"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LocationSvg, MailSvg, PhoneSvg } from "@/components/svg";

import languageLogo from "@/assets/img/logo/logo-lang.png";

const HeaderTop = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] =
    useState<boolean>(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] =
    useState<boolean>(false);
  const languageRef = useRef<HTMLLIElement | null>(null);
  const currencyRef = useRef<HTMLLIElement | null>(null);

  // Handler to toggle Language dropdown
  const toggleLanguageDropdown = useCallback((): void => {
    setIsLanguageDropdownOpen((prev) => !prev);
    setIsCurrencyDropdownOpen(false);
  }, []);

  // Handler to toggle Currency dropdown
  const toggleCurrencyDropdown = useCallback((): void => {
    setIsCurrencyDropdownOpen((prev) => !prev);
    setIsLanguageDropdownOpen(false);
  }, []);

  // Close the dropdown when clicking outside the button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node) &&
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
        setIsCurrencyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageRef, currencyRef]);

  return (
    <div className="it-header-top-area black-bg">
      <div className="container">
        <div className="it-header-top">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6 col-md-6 col-sm-6">
              <div className="it-header-top-left">
                <ul>
                  <li className="d-none d-xl-inline-block">
                    <span>
                      <PhoneSvg />
                    </span>
                    <a href="tel:000967-237-96">+918075787424</a>
                  </li>
                  <li>
                    <span>
                      <MailSvg />
                    </span>
                    <a href="mailto:skyfalljewel@gmail.com">
                      skyfalljewel@gmail.com
                    </a>
                  </li>
                  <li className="d-none d-xl-inline-block">
                    <span>
                      <LocationSvg />
                    </span>
                    <a href="https://www.google.com/maps">
                      Skyfall Jewel, Vellamkolly, Chundel, Wayanad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="it-header-top-right d-flex align-items-center justify-content-end">
                {/* <div className="it-header-top-lang-wrapper d-flex align-items-center">
                  <div className="it-header-currency d-none d-xl-block">
                    <span
                      ref={currencyRef}
                      className="it-header-currency-selected-currency it-currency-toggle"
                      onClick={toggleCurrencyDropdown}
                    >
                      USD
                    </span>
                    <ul
                      className={
                        isCurrencyDropdownOpen
                          ? 'it-header-currency-list it-currency-list it-currency-list-open'
                          : 'it-header-currency-list it-currency-list'
                      }
                    >
                      <li>Dollar</li>
                      <li>Rubel</li>
                      <li>Rupi</li>
                    </ul>
                  </div>
                  <div className="it-header-lang d-none d-md-block">
                    <Image
                      src={languageLogo}
                      alt="English Logo"
                      width={16}
                      height={16}
                    />
                    <span
                      ref={languageRef}
                      className="it-header-lang-selected-lang it-lang-toggle ps-1"
                      onClick={toggleLanguageDropdown}
                    >
                      English
                    </span>
                    <ul
                      className={
                        isLanguageDropdownOpen
                          ? 'it-header-lang-list it-lang-list it-lang-list-open'
                          : 'it-header-lang-list it-lang-list'
                      }
                    >
                      <li>Spanish</li>
                      <li>English</li>
                      <li>Canada</li>
                    </ul>
                  </div>
                </div> */}
                <div className="it-header-top-right-social p-relative text-end">
                  <a href="https://www.facebook.com/share/15t2C5v9t5/?mibextid=wwXIfr">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/skyfalljewel?igsh=ZHE3Ymk1dTAzOW1h">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;

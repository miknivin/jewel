"use client";

import { useState } from "react";
import Link from "next/link";

interface IProps {
  isMobileMenu?: boolean;
}

const MenuItems = ({ isMobileMenu }: IProps) => {
  const [home, setHome] = useState<boolean>(false);
  const [tour, setTour] = useState<boolean>(false);
  const [destination, setDestination] = useState<boolean>(false);
  const [page, setPage] = useState<boolean>(false);
  const [blog, setBlog] = useState<boolean>(false);

  const openMobileMenu = (
    menu: "home" | "tour" | "destination" | "page" | "blog"
  ): void => {
    if (menu === "home") {
      setHome(!home);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "tour") {
      setHome(false);
      setTour(!tour);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "destination") {
      setHome(false);
      setTour(false);
      setDestination(!destination);
      setPage(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobileMenu === true) {
      e.preventDefault();
    }
  };

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li className="has-dropdown">
        <Link href="/tour" onClick={handleClick}>
          Tours
          <button
            className={`${
              tour
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none `}
            onClick={() => {
              openMobileMenu("tour");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={tour ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link href="/tour-details/1">Wayanad Wonder</Link>
            <Link href="/tour-details/2">Kerala Complete</Link>
            <Link href="/tour-details/3">Thailand Treasures</Link>
            <Link href="/#">Munnar</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MenuItems;

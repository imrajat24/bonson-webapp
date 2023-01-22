import Image from "next/image";
import React from "react";
import Link from "next/link";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import logoMain from "../assets/images/logoMain.png";
import arrowDown from "../assets/icons/arrowDown.svg";
import arrowUp from "../assets/icons/arrowUp.svg";
import hamburger from "../assets/icons/hamburger.svg";

function Nav() {
  const options = [
    "Housewire & Industrial Cables",
    "3 core flat submersible cables",
    "Multicore flexible cables ",
    "Aluminium Multi core cable",
    "Copper Wire",
    "Submersible Poly Winding Wire",
  ];
  // ! function to toggle class in small screen sizes
  const handleClick = () => {
    const menu = document.getElementById("nav__menu");
    const btnWrap = document.getElementById("nav__btnWrap");
    menu.classList.toggle("nav__menu--active");
    btnWrap.classList.toggle("nav__btnWrap--active");
  };
  return (
    <nav className="nav row">
      <div className="nav__logo">
        <Link href={"/"}>
          <Image src={logoMain} alt="logo-main" />
        </Link>
      </div>

      <div className="nav__menu" id="nav__menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <Link href="/products">
              <Dropdown
                options={options}
                placeholder="Products"
                className="nav__menu--dropdown"
                controlClassName="nav__menu--dropdown--control"
                placeholderClassName="nav__menu--dropdown--placeholder"
                menuClassName="nav__menu--dropdown--menu"
                arrowClosed={
                  <span>
                    <Image
                      src={arrowDown}
                      alt="arrow-down"
                      width={15}
                      height={10}
                    />
                  </span>
                }
                arrowOpen={
                  <span>
                    <Image
                      src={arrowUp}
                      alt="arrow-up"
                      width={15}
                      height={10}
                    />
                  </span>
                }
              />
            </Link>
          </li> */}
          <li>
            <Link href={"/about"}>about us</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
        </ul>
      </div>

      <div className="nav__buttonWrap" id="nav__btnWrap">
        <Link href="/contact">
          <button className="btn btn--nav">Contact Us</button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={handleClick}>
        <Image src={hamburger} alt="hamburger" />
      </div>
    </nav>
  );
}

export default Nav;

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import logoMain from "../assets/images/logoMain.png";
import arrowDown from "../assets/icons/arrowDown.svg";
import arrowUp from "../assets/icons/arrowUp.svg";

function Nav(props) {
  const options = ["Category 1", "Category 2", "Category 3", "Category 4"];
  return (
    <nav className="nav row">
      <div className="nav__logo">
        <Image src={logoMain} alt="logo-main" height={50} width={200} />
      </div>

      <div className="nav__menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* <Link href="/product">Products</Link>
            <span>
              <Image src={arrowDown} alt="arrow-down" width={15} height={10} />
            </span> */}
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
                  <Image src={arrowUp} alt="arrow-up" width={15} height={10} />
                </span>
              }
            />
          </li>
          <li>
            <Link href="/about">about us</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
          <li>
            <Link href="/contact">contact us</Link>
          </li>
        </ul>
      </div>

      <div className="nav__buttonWrap">
        <button className="btn btn--nav">get a quote</button>
      </div>
    </nav>
  );
}

export default Nav;

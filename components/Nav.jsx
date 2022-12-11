import Image from "next/image";
import React from "react";
import Link from "next/link";

import logoMain from "../assets/images/logoMain.png";
import arrowDown from "../assets/icons/arrowDown.png";

function Nav(props) {
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
            <Link href="/product">Products</Link>
            <span>
              <Image src={arrowDown} alt="arrow-down" width={15} height={10} />
            </span>
          </li>
          <li>
            <Link href="/about">about us</Link>
          </li>
          <li>
            <Link href="#">gallery</Link>
          </li>
          <li>
            <Link href="#">contact us</Link>
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoMain from "../assets/images/logoMain.png";
const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="footer row">
        <div className="footer__contents">
          <div className="footer__contents__menu">
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__contents_contact">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              est?
            </p>
            <div>
              <p>+91987987987</p>
              <p>+96546546465</p>
            </div>
          </div>
          <div className="footer__logo">
            <Image src={logoMain} alt="logo-main" height={50} width={200} />
          </div>
        </div>
        <p className="credits">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          ipsa?
        </p>
      </div>
    </div>
  );
};

export default Footer;

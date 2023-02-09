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
                <Link href="home">Home</Link>
              </li>
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="contact">Contact Us</Link>
              </li>
              <li>
                <Link href="privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__contents_contact">
            <p className="footer__contents_contact--address">
              E-41 C, RIICO, Khushkhera, Rajasthan
            </p>
            <div className="footer__contents_contact--phone">
              <p>+91 1493 294 181</p>
              <p>info@bonson.in</p>
            </div>
          </div>
          <div className="footer__logo">
            <Image src={logoMain} alt="logo-main" />
          </div>
        </div>
        <p className="credits">© 2022 Bonson Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
